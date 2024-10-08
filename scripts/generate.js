import { ensureDir as ensure_dir, exists } from "https://deno.land/std/fs/mod.ts";
import { join, dirname } from "https://deno.land/std/path/mod.ts";
let output_dir

const interface_file = "src/interface.js";
/**
 * @typedef {Object} Export_Map
 * @property {string} [key: string]
 */

/**
 * @param {number} day
 * @returns {Promise<string>}
 * @description Generates the next day's directory if it doesn't exist.
 */
const next_day = async day => {
  output_dir = `src/${day}`;
  console.log("day", day);
  if (await exists(output_dir)){
    await next_day(day + 1)
  }
  else return
}

/**
 * Extracts export statements from the given content.
 * @param {string} content - The content to extract exports from.
 * @returns {Export_Map} An object containing the extracted exports.
 */
const extract_exports = content => {
  /** @type {Export_Map} */
  const exports = {};
  const export_regex = /export\s+(const|default\s+function|class)\s+(\w+)/g;
  let match;

  while ((match = export_regex.exec(content)) !== null) {
    const name = match[2];
    const start_index = match.index;
    let end_index = content.indexOf("\n}", start_index);
    if (end_index === -1) end_index = content.length;
    exports[name] = content.slice(start_index, end_index + 2);
  }

  return exports;
}

await next_day(1);
console.log("next_day", output_dir);
await ensure_dir(output_dir);

const content = await Deno.readTextFile(interface_file);
const exports = extract_exports(content);

// Generate files
for (const [name, export_content] of Object.entries(exports)) {
  const file_name = `${name}.js`;
  const file_path = join(output_dir, file_name);
  await Deno.writeTextFile(file_path, export_content);
  console.log(`Generated ${file_path}`);
}

console.log('File generation complete!');
