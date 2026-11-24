import { build, context } from "esbuild";
import { cpSync, mkdirSync, readFileSync, writeFileSync, rmSync, existsSync, statSync, createReadStream } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const watch = process.argv.includes("--watch");
const PORT = 5173;
const ROUTES = [
  "cmf",
  "samsung",
  "sound",
  "music",
  "features",
  "facts",
  "difference",
  "hear",
  "compare",
  "recommend",
  "verdict",
];

function writeStatic() {
  mkdirSync("dist/assets", { recursive: true });
  const html = readFileSync("index.html", "utf8");
  writeFileSync("dist/index.html", html);
  for (const r of ROUTES) {
    mkdirSync(`dist/${r}`, { recursive: true });
    writeFileSync(`dist/${r}/index.html`, html);
  }
  try {
    cpSync("public", "dist", { recursive: true });
  } catch {
    /* public/ je volitelné */
  }
}

rmSync("dist", { recursive: true, force: true });
writeStatic();

const opts = {
  entryPoints: { app: "src/main.tsx" },
  bundle: true,
  outdir: "dist/assets",
  format: "esm",
  target: "es2020",
  jsx: "automatic",
  minify: !watch,
  sourcemap: watch ? "inline" : false,
  loader: { ".svg": "text" },
  logLevel: "info",
  define: { "process.env.NODE_ENV": watch ? '"development"' : '"production"' },
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".map": "application/json",
};

function serve() {
  createServer((req, res) => {
    const url = decodeURIComponent((req.url || "/").split("?")[0]);
    const safe = normalize(url).replace(/^(\.\.[/\\])+/, "").replace(/^[/\\]+/, "");
    let file = safe ? join("dist", safe) : join("dist", "index.html");

    if (!extname(file)) {
      const nested = join(file, "index.html");
      file = existsSync(nested) ? nested : join("dist", "index.html");
    } else if (!existsSync(file)) {
      file = join("dist", "index.html");
    }

    if (!existsSync(file) || statSync(file).isDirectory()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }

    const ext = extname(file);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    createReadStream(file).pipe(res);
  }).listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

if (watch) {
  const ctx = await context({ ...opts, plugins: [{
    name: "html",
    setup(build) {
      build.onEnd(() => writeStatic());
    },
  }] });
  await ctx.watch();
  serve();
  console.log("watching…");
} else {
  await build(opts);
}
