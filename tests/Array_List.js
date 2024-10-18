import Array_List from '@/Array_List.js'
import { test_list } from '@@/list-test.js'

/**
 * @typedef {import('interface').default} Array_List
 */
test('Array_List', () => {
  /** @type {Array_List<number>} */
  const list = new Array_List(3)
  t est_list(list)
})
