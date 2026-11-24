// Comprehensive fix: scan ALL src files and fix any string that has 'word" pattern
// which breaks JS string parsing (single quote + text + double quote = syntax error)
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

function walkFiles(dir) {
  const results = [];
  for (const f of readdirSync(dir)) {
    const full = join(dir, f);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...walkFiles(full));
    else if ([".ts", ".tsx"].includes(extname(f))) results.push(full);
  }
  return results;
}

const files = walkFiles("src");
let totalFixes = 0;

for (const fp of files) {
  const raw = readFileSync(fp, "utf8");
  const lines = raw.split("\n");
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Detect pattern: a single quote followed by some text and then a straight double quote
    // Pattern inside a double-quoted string: 'someword"
    // This happens when original text had „word" (Czech quotes) and we replaced „ with ' but left " as "
    
    // Strategy: find all double-quoted string literals and check if they contain unescaped ' that's then followed by " inside the same line
    // Simple heuristic: if a line contains a string literal with '" pattern, that breaks parsing
    
    // Look for patterns like: 'xyz" where this is INSIDE a larger double-quoted string
    // The esbuild error shows: 'tlačit" na středy
    // This means we have: "...lehce 'tlačit" na..." where " after tlačit closes the outer string
    
    // Fix: replace the '" with '' (remove the double quote or replace with escaped)
    // But we need to be careful not to break the line
    
    // Scan for problematic patterns
    let newLine = line;
    
    // Pattern: single quote before some word then double quote (not at end of string assignment)
    // Looking for: 'WORD" where WORD doesn't contain spaces typically
    // Replace trailing " after a word that started with ' if we're inside a "..." string
    
    // More targeted: look for lines that have desc: "... 'word" ... where the " after word is unintended
    if (line.includes("'") && line.includes('"')) {
      // Try to identify if this line has the problem
      // Use a regex to find patterns like 'word" (single quote, letters/diacritics, closing double quote)
      const problematic = /'\S+" /g;
      if (problematic.test(line)) {
        // This line might have the issue
        // Replace pattern 'x...x" with 'x...x' (change closing " to ' inside the string)
        newLine = line.replace(/'([^'"]+)"/g, (match, word) => {
          // Check if the word doesn't look like it's supposed to end a string (not followed by , or ; at line end)
          return `'${word}'`;
        });
        if (newLine !== line) {
          console.log(`Line ${i+1} of ${fp}:`);
          console.log(`  BEFORE: ${line.trim()}`);
          console.log(`  AFTER:  ${newLine.trim()}`);
          lines[i] = newLine;
          changed = true;
          totalFixes++;
        }
      }
    }
  }

  if (changed) {
    writeFileSync(fp, lines.join("\n"), "utf8");
    console.log(`Saved: ${fp}`);
  }
}

console.log(`\nTotal fixes: ${totalFixes}`);
