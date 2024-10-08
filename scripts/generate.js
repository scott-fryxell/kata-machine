import { ensureDir as ensure_dir, exists } from "https://deno.land/std/fs/mod.ts";
import { join, dirname } from "https://deno.land/std/path/mod.ts";

const interface_file = "src/interface.js";
const output_dir = "src/generated";

/**
 * @typedef {Object} ExportMap
 * @property {string} [key: string]
 */

/**
 * Extracts export statements from the given content.
 * @param {string} content - The content to extract exports from.
 * @returns {ExportMap} An object containing the extracted exports.
 */
function extract_exports(content) {
  /** @type {ExportMap} */
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

// Read the interface file
const content = await Deno.readTextFile(interface_file);


// Ensure output directory exists
await ensure_dir(output_dir);

// Extract exports from the interface file
const exports = extract_exports(content);

// Generate files
for (const [name, export_content] of Object.entries(exports)) {
  const file_name = `${name}.js`;
  const file_path = join(output_dir, file_name);
  await Deno.writeTextFile(file_path, export_content);
  console.log(`Generated ${file_path}`);
}

console.log('File generation complete!');
