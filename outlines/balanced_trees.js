/**
 * @typedef {Object} self_balancing_tree
 * @description A binary search tree that automatically maintains a small,
 * balanced height as items are inserted so lookups stay close to O(log n)
 * instead of degrading toward O(n) on skewed input (e.g. inserting sorted
 * data into a plain BST turns it into a linked list).
 *
 * ### Family covered here
 * - AVL tree - strictly height-balanced: after every insert, each node's
 *   left/right subtree heights differ by at most 1, restored via rotations
 * - Red-black tree - approximately balanced via a coloring invariant
 *   (fewer rotations than AVL, cheaper writes, slightly taller trees)
 * - Splay tree - not height-balanced at all; every accessed node is
 *   rotated up to the root, so recently/frequently used items stay cheap
 *   to reach again
 * - B-tree - generalizes a BST node to hold multiple keys/children,
 *   keeping the tree very wide and shallow; the classic on-disk/database
 *   index structure
 */

/**
 * @template T
 */
export const AVL_Tree = class {
  /**
   * @type {*}
   */
  root

  constructor() {
    this.root = undefined
  }

  /**
   * @param {T} value
   * @returns {void}
   */
  insert(value) {
    console.log(value)
  }

  /**
   * @param {T} value
   * @returns {boolean}
   */
  search(value) {
    console.log(value)
    return false
  }

  /**
   * @returns {T[]} values in sorted order
   */
  in_order() {
    return []
  }

  /**
   * @returns {number} height of the tree, -1 when empty
   */
  height() {
    return -1
  }
}

/**
 * @template T
 */
export const Red_Black_Tree = class {
  /**
   * @type {*}
   */
  root

  constructor() {
    this.root = undefined
  }

  /**
   * @param {T} value
   * @returns {void}
   */
  insert(value) {
    console.log(value)
  }

  /**
   * @param {T} value
   * @returns {boolean}
   */
  search(value) {
    console.log(value)
    return false
  }

  /**
   * @returns {T[]} values in sorted order
   */
  in_order() {
    return []
  }

  /**
   * @returns {number} height of the tree, -1 when empty
   */
  height() {
    return -1
  }
}

/**
 * @template T
 */
export const Splay_Tree = class {
  /**
   * @type {*}
   */
  root

  constructor() {
    this.root = undefined
  }

  /**
   * @param {T} value
   * @returns {void}
   */
  insert(value) {
    console.log(value)
  }

  /**
   * Searches for a value, splaying it to the root if found.
   * @param {T} value
   * @returns {boolean}
   */
  search(value) {
    console.log(value)
    return false
  }

  /**
   * @returns {T | undefined} the value currently at the root
   */
  peek_root() {
    return undefined
  }

  /**
   * @returns {T[]} values in sorted order
   */
  in_order() {
    return []
  }
}

/**
 * @template T
 */
export const B_Tree = class {
  /**
   * @type {*}
   */
  root

  /**
   * @param {number} order - max children per node
   */
  constructor(order) {
    this.order = order
    this.root = undefined
  }

  /**
   * @param {T} value
   * @returns {void}
   */
  insert(value) {
    console.log(value)
  }

  /**
   * @param {T} value
   * @returns {boolean}
   */
  search(value) {
    console.log(value)
    return false
  }

  /**
   * @returns {T[]} values in sorted order
   */
  in_order() {
    return []
  }
}
