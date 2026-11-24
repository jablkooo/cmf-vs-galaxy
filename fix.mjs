import { readFileSync, writeFileSync } from "node:fs";

// Fix CmfProduct.tsx - replace the problematic line
let cmf = readFileSync("src/sections/CmfProduct.tsx", "utf8");
// Find line with 'tlacit and fix it
const lines1 = cmf.split("\n");
for (let i = 0; i < lines1.length; i++) {
  if (lines1[i].includes("tla") && lines1[i].includes("it") && lines1[i].includes("desc:") && lines1[i].includes("STREDY") === false) {
    // Check if this is the problematic line
    if (lines1[i].length > 90 && lines1[i].includes("desc:")) {
      console.log("Found problematic line", i+1, ":", lines1[i].slice(0, 50), "...");
    }
  }
}

// Just replace the whole desc string for the STEDY section
cmf = cmf.replace(
  /desc: "[^"]*basy mohou lehce[^"]*",/,
  'desc: "Vokaly jsou citelne - dedikaci 6mm menic pomuze, ale silne basove EQ muze snizit jejich zdanlivou hlasitost.",'
);
writeFileSync("src/sections/CmfProduct.tsx", cmf);
console.log("Fixed CmfProduct.tsx");

// Fix data.ts
let data = readFileSync("src/data/data.ts", "utf8");
const lines2 = data.split("\n");
for (let i = 0; i < lines2.length; i++) {
  if (lines2[i].includes("punch") && lines2[i].includes("samsungNote")) {
    console.log("Found punch line", i+1, ":", lines2[i]);
    lines2[i] = '    samsungNote: "Prirozanejsi zvuk housu, ale bez vyraznejsiho nizeho razeneho efektu.",';
  }
}
writeFileSync("src/data/data.ts", lines2.join("\n"));
console.log("Fixed data.ts");
