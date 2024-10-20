import { copy, ensureDir as ensure_dir, exists } from '@std/fs'

const src = './src'
const completed = './completed'
const date = new Date()
const new_name = `${completed}/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
if (await exists('src')) {
  await ensure_dir(completed)
  await Deno.rename(src, new_name)
}
await copy('./outlines', src, { preserveTimestamps: true })
console.log('File generation complete.')
