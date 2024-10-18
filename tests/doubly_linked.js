import LinkedList from '@/doubly_linked.js'
import { test_list } from '@@/list-test.js'

test('Doubly_Linked_List', () => {
  /** @type {import('interface').default} */
  const list = new LinkedList()
  test_list(list)
})
