import bfs from '@/btree_breadth_first.js'
import compare from '@/btree_compare.js'
import bt_pre_order from '@/btree_pre_order.js'
import bt_post_order from '@/btree_post_order.js'
import bt_in_order from '@/btree_in_order.js'
import dfs from '@/btree_depth_first.js'

test('DFS on BST', () => {
  expect(dfs(tree, 45)).toEqual(true)
  expect(dfs(tree, 7)).toEqual(true)
  expect(dfs(tree, 69)).toEqual(false)
})


test('In order', () => {
  expect(bt_in_order(tree)).toEqual([
    5,
    7,
    10,
    15,
    20,
    29,
    30,
    45,
    50,
    100,
  ])
})


test('post order', () => {
  expect(bt_post_order(tree)).toEqual([
    7,
    5,
    15,
    10,
    29,
    45,
    30,
    100,
    50,
    20,
  ])
})

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


test('bt bfs', () => {
  expect(bfs(tree, 45)).toEqual(true)
  expect(bfs(tree, 7)).toEqual(true)
  expect(bfs(tree, 69)).toEqual(false)
})
test('Compare Binary Trees', () => {
  expect(compare(tree, tree)).toEqual(true)
  expect(compare(tree, tree2)).toEqual(false)
})


import Trie from '@code/Trie'

test('Trie', function () {
  const trie = new Trie()
  trie.insert('foo')
  trie.insert('fool')
  trie.insert('foolish')
  trie.insert('bar')

  expect(trie.find('fo').sort()).toEqual([
    'foo',
    'fool',
    'foolish',
  ])

  trie.delete('fool')

  expect(trie.find('fo').sort()).toEqual([
    'foo',
    'foolish',
  ])
})

import MinHeap from '@code/MinHeap'

test('min heap', function () {
  const heap = new MinHeap()

  expect(heap.length).toEqual(0)

  heap.insert(5)
  heap.insert(3)
  heap.insert(69)
  heap.insert(420)
  heap.insert(4)
  heap.insert(1)
  heap.insert(8)
  heap.insert(7)

  expect(heap.length).toEqual(8)
  expect(heap.delete()).toEqual(1)
  expect(heap.delete()).toEqual(3)
  expect(heap.delete()).toEqual(4)
  expect(heap.delete()).toEqual(5)
  expect(heap.length).toEqual(4)
  expect(heap.delete()).toEqual(7)
  expect(heap.delete()).toEqual(8)
  expect(heap.delete()).toEqual(69)
  expect(heap.delete()).toEqual(420)
  expect(heap.length).toEqual(0)
})

export const tree: BinaryNode<number> = {
  value: 20,
  right: {
      value: 50,
      right: {
          value: 100,
          right: null,
          left: null,
      },
      left: {
          value: 30,
          right: {
              value: 45,
              right: null,
              left: null,
          },
          left: {
              value: 29,
              right: null,
              left: null,
          }
      },
  },
  left: {
      value: 10,
      right: {
          value: 15,
          right: null,
          left: null,
      },
      left: {
          value: 5,
          right: {
              value: 7,
              right: null,
              left: null,
          },
          left: null,
      }
  }
};
export const tree2: BinaryNode<number> = {
  value: 20,
  right: {
      value: 50,
      right: null,
      left: {
          value: 30,
          right: {
              value: 45,
              right: {
                  value: 49,
                  left: null,
                  right: null,
              },
              left: null,
          },
          left: {
              value: 29,
              right: null,
              left: {
                  value: 21,
                  right: null,
                  left: null,
              },
          }
      },
  },
  left: {
      value: 10,
      right: {
          value: 15,
          right: null,
          left: null,
      },
      left: {
          value: 5,
          right: {
              value: 7,
              right: null,
              left: null,
          },
          left: null,
      }
  }
};
