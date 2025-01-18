import {
  btree_breadth_first,
  btree_compare,
  btree_pre_order,
  btree_post_order,
  btree_in_order,
  btree_depth_first,
  Min_Heap,
  Trie
} from '@/trees'

import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('tree tests', () => {
  it('depth first search on binary search tree', () => {
    expect(btree_depth_first(tree, 45)).toEqual(true)
    expect(btree_depth_first(tree, 7)).toEqual(true)
    expect(btree_depth_first(tree, 69)).toEqual(false)
  })

  it('in order traversal', () => {
    expect(btree_in_order(tree)).toEqual([
      5, 7, 10, 15, 20, 29, 30, 45, 50, 100
    ])
  })

  it('post order traversal', () => {
    expect(btree_post_order(tree)).toEqual([
      7, 5, 15, 10, 29, 45, 30, 100, 50, 20
    ])
  })

  it('pre order traversal', () => {
    expect(btree_pre_order(tree)).toEqual([
      20, 10, 5, 7, 15, 50, 30, 29, 45, 100
    ])
  })

  it('breadth first search', () => {
    expect(btree_breadth_first(tree, 45)).toEqual(true)
    expect(btree_breadth_first(tree, 7)).toEqual(true)
    expect(btree_breadth_first(tree, 69)).toEqual(false)
  })

  it('binary tree comparison', () => {
    expect(btree_compare(tree, tree)).toEqual(true)
    expect(btree_compare(tree, tree2)).toEqual(false)
  })

  it('trie operations', () => {
    const trie = new Trie()
    trie.insert('foo')
    trie.insert('fool')
    trie.insert('foolish')
    trie.insert('bar')

    expect(trie.find('fo').sort()).toEqual([
      'foo',
      'fool',
      'foolish'
    ])

    trie.delete('fool')

    expect(trie.find('fo').sort()).toEqual([
      'foo',
      'foolish'
    ])
  })

  it('min heap operations', () => {
    const heap = new Min_Heap()

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
})

/**
 * @typedef {Object} Binary_Node
 * @property {number} value
 * @property {Binary_Node|null} left
 * @property {Binary_Node|null} right
 */

/**
 * @type {Binary_Node}
 */
export const tree = {
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
}

/**
 * @type {Binary_Node}
 */
export const tree2 = {
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
}
