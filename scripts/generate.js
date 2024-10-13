import {
  ensureDir as ensure_dir,
  exists,
} from "https://deno.land/std/fs/mod.ts"
import { join } from "https://deno.land/std/path/mod.ts"

/**
 * @typedef {Object} Export_Map
 * @property {string} [key: string]
 */

/**
 * Extracts export statements from the given content.
 * @param {string} content - The content to extract exports from.
 * @returns {Export_Map} An object containing the extracted exports.
 */
const extract_exports = (content) => {
  /** @type {Export_Map} */
  const exports = {}
  const export_regex = /export\s+(const|default\s+function|class)\s+(\w+)/g
  let match
  while ((match = export_regex.exec(content)) !== null) {
    const name = match[2]
    const start_index = match.index
    let end_index = content.indexOf("\n}", start_index)
    if (end_index === -1) end_index = content.length
    exports[name] = content.slice(start_index, end_index + 2)
  }
  return exports
}

let date = new Date()
await ensure_dir('completed')
await ensure_dir('src')
await Deno.rename("src", `completed/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
await ensure_dir('src')

const content = await Deno.readTextFile('interface.js');
const exports = extract_exports(content)

for (const [name, export_content] of Object.entries(exports)) {
  const file_name = `${name}.js`
  const file_path = join('src', file_name)
  await Deno.writeTextFile(file_path, export_content)
  console.log(file_path)
}

console.log("File generation complete.")
