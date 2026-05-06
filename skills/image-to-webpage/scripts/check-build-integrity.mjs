#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

function usage() {
  console.error(`Usage:
node skills/image-to-webpage/scripts/check-build-integrity.mjs --dist dist \\
  --class "h-[333px]" \\
  --css-contains "radial-gradient" \\
  --js-contains "diamond-ring" \\
  --asset-name-contains "diamond-ring"

Checks built CSS/JS/assets without opening a browser. Use --class for complete
Tailwind utility class names that must be present in the emitted CSS.`);
}

function readArgs(argv) {
  const args = {
    dist: "dist",
    classes: [],
    cssContains: [],
    jsContains: [],
    assetNameContains: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    const value = argv[index + 1];

    if (!key.startsWith("--")) {
      usage();
      throw new Error(`Unexpected argument "${key}".`);
    }

    if (value === undefined || value.startsWith("--")) {
      usage();
      throw new Error(`Missing value for "${key}".`);
    }

    switch (key) {
      case "--dist":
        args.dist = value;
        break;
      case "--class":
        args.classes.push(value);
        break;
      case "--css-contains":
        args.cssContains.push(value);
        break;
      case "--js-contains":
        args.jsContains.push(value);
        break;
      case "--asset-name-contains":
        args.assetNameContains.push(value);
        break;
      default:
        usage();
        throw new Error(`Unsupported option "${key}".`);
    }

    index += 1;
  }

  return args;
}

function walkFiles(root) {
  if (!fs.existsSync(root)) {
    return [];
  }

  const entries = fs.readdirSync(root, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      return walkFiles(fullPath);
    }
    if (entry.isFile()) {
      return [fullPath];
    }
    return [];
  });
}

function escapeTailwindClass(className) {
  return `.${className.replace(/\\/g, "\\\\").replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1")}`;
}

function readTextFiles(files) {
  return files.map((file) => fs.readFileSync(file, "utf8")).join("\n");
}

function main() {
  const args = readArgs(process.argv.slice(2));
  const distRoot = path.resolve(args.dist);
  const files = walkFiles(distRoot);
  const cssFiles = files.filter((file) => file.endsWith(".css"));
  const jsFiles = files.filter((file) => file.endsWith(".js"));
  const assetFiles = files.map((file) => path.relative(distRoot, file));

  if (!fs.existsSync(distRoot)) {
    throw new Error(`Build output directory does not exist: ${distRoot}`);
  }

  if (cssFiles.length === 0) {
    throw new Error(`No CSS files found under ${distRoot}`);
  }

  if (jsFiles.length === 0) {
    throw new Error(`No JS files found under ${distRoot}`);
  }

  const css = readTextFiles(cssFiles);
  const js = readTextFiles(jsFiles);
  const failures = [];

  for (const className of args.classes) {
    const selector = escapeTailwindClass(className);
    if (!css.includes(selector)) {
      failures.push(`missing CSS class ${className} as selector ${selector}`);
    }
  }

  for (const needle of args.cssContains) {
    if (!css.includes(needle)) {
      failures.push(`missing CSS text ${JSON.stringify(needle)}`);
    }
  }

  for (const needle of args.jsContains) {
    if (!js.includes(needle)) {
      failures.push(`missing JS text ${JSON.stringify(needle)}`);
    }
  }

  for (const needle of args.assetNameContains) {
    if (!assetFiles.some((file) => file.includes(needle))) {
      failures.push(`missing emitted asset filename containing ${JSON.stringify(needle)}`);
    }
  }

  if (failures.length > 0) {
    console.error("Build integrity check failed:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    `build integrity ok: ${args.classes.length} classes, ${args.cssContains.length} CSS strings, ${args.jsContains.length} JS strings, ${args.assetNameContains.length} asset checks`,
  );
}

main();
