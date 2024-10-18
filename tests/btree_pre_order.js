import bt_pre_order from '@/btree_pre_order.js'
import { tree } from '@@/tree'

test('Pre order', () => {
  expect(bt_pre_order(tree)).toEqual([
    20,
    10,
    5,
    7,
    15,
    50,
    30,
    29,
    45,
    100,
  ])
})
