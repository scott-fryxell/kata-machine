import compare from '@/btree_compare.js'
import { tree, tree2 } from '@@/tree'

test('Compare Binary Trees', () => {
  expect(compare(tree, tree)).toEqual(true)
  expect(compare(tree, tree2)).toEqual(false)
})
