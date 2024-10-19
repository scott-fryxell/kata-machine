import { ensureDir as ensure_dir } from '@std/fs'
import { join } from '@std/path'

/**
 * @typedef {Object.<string, string>} export_map
 */

/**
 * Extracts export statements from the given content.
 * @param {string} content - The content to extract exports from.
 * @returns {export_map} An object containing the extracted exports.
 */
const extract_exports = (content) => {
  /** @type {export_map} */
  const exports = {}

  const export_regex = /export\s+(const)\s+(\w+)/g
  let match
  while ((match = export_regex.exec(content)) !== null) {
    const name = match[2]
    const start_index = match.index
    let end_index = content.indexOf('\n}', start_index)
    if (end_index === -1) end_index = content.length
    exports[name] = content.slice(start_index, end_index + 2)
  }
  return exports
}

const date = new Date()
await ensure_dir('completed')
await ensure_dir('src')
await Deno.rename(
  'src',
  `completed/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
)
await ensure_dir('src')

const content = await Deno.readTextFile('interface.js')
const exports = extract_exports(content)

for (const [name, export_content] of Object.entries(exports)) {
  const file_name = `${name}.js`
  const file_path = join('src', file_name)
  await Deno.writeTextFile(file_path, export_content)
  console.log(file_path)
}

console.log('File generation complete.')
