import {
  AVL_Tree,
  B_Tree,
  Red_Black_Tree,
  Splay_Tree,
} from '@/balanced_trees.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

// inserting already-sorted data into a plain BST degenerates to a
// linked list of height n - 1. A balanced tree must stay far shorter.
const sorted_values = Array.from({ length: 15 }, (_, i) => i + 1)

describe('avl tree', () => {
  it('stays balanced and searchable when fed sorted input', () => {
    const tree = new AVL_Tree()
    sorted_values.forEach((v) => tree.insert(v))

    expect(tree.in_order()).toEqual(sorted_values)
    expect(tree.search(5)).toEqual(true)
    expect(tree.search(999)).toEqual(false)
    // AVL height is bounded by ~1.44 * log2(n + 2); for n=15 that's ~5.6
    expect(tree.height()).toBeLessThanOrEqual(6)
  })
})

describe('red black tree', () => {
  it('stays balanced and searchable when fed sorted input', () => {
    const tree = new Red_Black_Tree()
    sorted_values.forEach((v) => tree.insert(v))

    expect(tree.in_order()).toEqual(sorted_values)
    expect(tree.search(5)).toEqual(true)
    expect(tree.search(999)).toEqual(false)
    // red-black height is bounded by 2 * log2(n + 1); for n=15 that's 8
    expect(tree.height()).toBeLessThanOrEqual(8)
  })
})

describe('splay tree', () => {
  it('rotates accessed values up to the root', () => {
    const tree = new Splay_Tree()
    ;[5, 3, 8, 1, 4, 7, 9].forEach((v) => tree.insert(v))

    expect(tree.search(4)).toEqual(true)
    expect(tree.peek_root()).toEqual(4)

    expect(tree.search(1)).toEqual(true)
    expect(tree.peek_root()).toEqual(1)

    expect(tree.search(999)).toEqual(false)
    expect(tree.in_order()).toEqual([1, 3, 4, 5, 7, 8, 9])
  })
})

describe('b tree', () => {
  it('stays searchable and sorted regardless of node fan-out', () => {
    const tree = new B_Tree(3)
    sorted_values.forEach((v) => tree.insert(v))

    expect(tree.in_order()).toEqual(sorted_values)
    expect(tree.search(12)).toEqual(true)
    expect(tree.search(999)).toEqual(false)
  })
})
