/**
 * @param {boolean[]} breaks - An array of boolean values representing whether the ball breaks at each floor.
 * @returns {number} The index where the ball first breaks, or -1 if it never breaks.
 */
export const two_crystal_balls = (breaks) => {
  /**
   * @description Given two crystal balls that will break if dropped from high enough distance,
   * determine the exact spot in which crystal ball will break in the most optimized way.
   * The breaks list could represent each floor of a building.
   */
  console.log(breaks)
  return -1
}

/**
 * @param {number[]} haystack
 * @param {number} needle
 * @returns {boolean}
 */
export const linear_search = (haystack, needle) => {
  console.log(haystack, needle)
  return false
}

/**
 * @param {number[]} haystack - The sorted array to search in
 * @param {number} needle - The value to search for
 * @returns {boolean} - True if the needle is found, false otherwise
 */
export const binary_search = (haystack, needle) => {
  console.log(haystack, needle)
  return false
}

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const quick_sort = (arr) => {
  console.log(arr)
}

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const merge_sort = (arr) => {
  console.log(arr)
}

/**
 * Performs an insertion sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {void}
 */
export const insertion_sort = (arr) => {
  console.log(arr)
  /**
   * @description
   * The critical point is that an array of one element is sorted, which is why i = 1 rather than 0.
   *
   * The critical part of this algorithm is the inner while loop. This loop shifts elements to the right
   * to make space for the current element. The number of swaps is proportional to the number of inversions
   * in the array, which is O(n^2) in the worst case.
   *
   * Time Complexity:
   * - Best-case: O(n) when the array is already sorted.
   * - Worst-case: O(n^2) when the array is sorted in reverse order.
   * - Average-case: O(n^2), since the number of comparisons and swaps is proportional to the number of inversions in the array.
   *
   * Space Complexity: O(1) as it sorts in-place.
   */

  /**
   * Example usage:
   * @example
   * let array = [64, 35, 25, 12, 22, 11, 90]
   * console.log("Unsorted array:", array)
   * insertion_sort(array)
   * console.log("Sorted array:", array) // [11, 12, 22, 25, 35, 64, 90]
   */
}

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const bubble_sort = (arr) => {
  /**
   * @description Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
   * compares adjacent elements, and swaps them if they are in the wrong order.
   * The pass through the list is repeated until the list is sorted.
   *
   * Time Complexity:
   * - Best-case: O(n) when the array is already sorted.
   * - Worst-case: O(n^2) when the array is sorted in reverse order.
   * - Average-case: O(n^2), since the number of comparisons and swaps is proportional to the number of inversions in the array.
   */
  console.log(arr)
}

/**
 * @param {string[]} maze
 * @param {string} wall
 * @param {Point} start
 * @param {Point} end
 * @returns {Point[]}
 */
export const maze_solver = (maze, wall, start, end) => {
  console.log(maze, wall, start, end)
  return []
}

/**
 * @template T
 */
export const Queue = class {
  /**
   * @private
   * @type {number}
   */
  length

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
   */
  head

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
   */
  tail

  constructor() {
    this.length = 0
    console.log(this.head, this.tail, this.length)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  enqueue(item) {
    console.log(item)
  }

  // first update head to point to the next value
  // then return out previous head
  /**
   * @returns {T | undefined}
   */
  deque() {
    return undefined
  }

  /**
   * @returns {T | undefined}
   */
  peek() {
    return undefined
  }
}

/**
 * @template T
 */
export const Stack = class {
  /**
   * @type {number}
   * @private
   */
  length

  /**
   * @type {Stack_Node<T> | undefined}
   * @private
   */
  head

  constructor() {
    this.length = 0
    console.log(this.length, this.head)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  push(item) {
    console.log(item)
  }

  /**
   * @returns {T | undefined}
   */
  pop() {
    return undefined
  }

  /**
   * @returns {T | undefined}
   */
  peek() {
    return undefined
  }
}

/**
 * @template T
 */
export const Singly_Linked_List = class {
  /**
   * @type {number}
   * @private
   */
  length

  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  remove(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}

/**
 * @template T
 */
export const Doubly_Linked_List = class {
  /**
   * @type {number}
   * @private
   */
  length

  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  remove(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}

/**
 * @template T
 */
export const Array_List = class {
  /**
   * @type {number}
   * @private
   */
  length

  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {number} item
   * @returns {void}
   */
  prepend(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {T} item
   * @returns {T|undefined}
   */
  remove(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}
/**
 * @template T
 */
export const Ring_Buffer = class {
  /**
   * @type {number}
   * @private
   */
  length

  /**
   * @param {number} initial_size
   */
  constructor(initial_size) {
    this.length = initial_size
    console.log(this.length)
  }

  /**
   * Shift an item to the beginning of the buffer
   * @param {T} item
   * @returns {void}
   */
  shift(item) {
    console.log(item)
  }

  /**
   * Remove from the beginning of the buffer
   * @param {T} item
   * @returns {void}
   */
  unshift(item) {
    console.log(item)
  }

  /**
   * Add an item to the end of the buffer
   * @param {T} item
   * @returns {void}
   */
  push(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  pop(item) {
    console.log(item)
    return undefined
  }

  /**
   * Get an item from anywhere in the buffer
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /** These next two methods will have the worst performance
   * as they will require shifting all the elements in the buffer
   */

  /**
   * Insert an item anywhere in the buffer
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * Remove an item from anywhere in the buffer
   * This will have the worst performance of all the methods
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}

// other data structures

/**
 * @class MinHeap
 */
export const Min_Heap = class {
  /**
   * @type {number}
   * @private
   */
  length

  constructor() {
    this.length = 0
  }
  /**
   * @param {number} value
   * @returns {void}
   */
  insert(value) {
    console.log(value, this.length)
  }

  /**
   * @returns {number}
   */
  delete() {
    return 0
  }
}

/**
 * Represents a Trie data structure.
 */
export const Trie = class {
  constructor() {}
  /**
   * Inserts an item into the Trie.
   * @param {string} item - The item to insert.
   * @returns {void}
   */
  insert(item) {
    console.log(item)
  }

  /**
   * Deletes an item from the Trie.
   * @param {string} item - The item to delete.
   * @returns {void}
   */
  delete(item) {
    console.log(item)
  }

  /**
   * Finds all items in the Trie that start with the given partial string.
   * @param {string} partial - The partial string to search for.
   * @returns {string[]} An array of matching items.
   */
  find(partial) {
    console.log(partial)
    return []
  }
}

/**
 * @template {string | number} T
 * @template V
 */
export const Map = class {
  constructor() {}

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  get(key) {
    console.log(key)
    return undefined
  }

  /**
   * @param {T} key
   * @param {V} value
   * @returns {void}
   */
  set(key, value) {
    console.log(key, value)
  }

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  delete(key) {
    console.log(key)
    return undefined
  }

  /**
   * @returns {number}
   */
  size() {
    return 0
  }
}

/**
 * @template K, V
 * @implements {Least_Recently_Used<K,V>}
 */
export const Least_Recently_Used = class {
  /**
   * @private
   * @type {number}
   */
  length
  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {K} key
   * @param {V} value
   * @returns {void}
   */
  update(key, value) {
    console.log(key, value)
  }

  /**
   * @param {K} key
   * @returns {V | undefined}
   */
  get(key) {
    console.log(key)
    return undefined
  }
}

/**
 * @param {Weighted_Adjacency_List} list - The weighted adjacency list.
 * @param {number} from - The source node.
 * @param {number} to - The destination node.
 * @param {number} weight - The weight of the edge.
 * @returns {void}
 */
export const graph_add_node_list = (list, from, to, weight) => {
  console.log(list, from, to, weight)
}

/**
 * @param {Weighted_Adjacency_Matrix} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[]|null}
 */
export const graph_breadth_first_matrix = (graph, source, needle) => {
  console.log(graph, source, needle)
  return null
}

/**
 * @param {Weighted_Adjacency_List} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[] | null}
 */
export const graph_depth_first_list = (graph, source, needle) => {
  console.log(graph, source, needle)
  return null
}

/**
 * @param {Weighted_Adjacency_Matrix} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[] | null}
 */
export const graph_depth_first_matrix = (graph, source, needle) => {
  console.log(graph, source, needle)
  return null
}

/**
 * @param {Binary_Node<number> | null} a
 * @param {Binary_Node<number> | null} b
 * @returns {boolean}
 */
export const btree_compare = (a, b) => {
  console.log(a, b)
  return false
}

/**
 * @param {Binary_Node<number>} head
 * @returns {number[]}
 */
export const btree_pre_order = (head) => {
  console.log(head)
  return []
}

/**
 * @param {Binary_Node<number>} head
 * @returns {number[]}
 */
export const btree_post_order = (head) => {
  console.log(head)
  return []
}

/**
 * @param {Binary_Node<number>} head
 * @returns {number[]}
 */
export const btree_in_order = (head) => {
  console.log(head)
  return []
}

/**
 * @param {Binary_Node<number>} head
 * @param {number} needle
 * @returns {boolean}
 */
export const btree_depth_first = (head, needle) => {
  console.log(head, needle)
  return false
}

/**
 * @param {Binary_Node<number>} head
 * @param {number} needle
 * @returns {boolean}
 */
export const btree_breadth_first = (head, needle) => {
  console.log(head, needle)
  return false
}

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @template T
 * @typedef {Object} List_Node
 * @property {T} value
 * @property {List_Node<T>} [next]
 * @property {List_Node<T>} [prev]
 */

/**
 * @template T
 * @typedef {Object} Stack_Node
 * @property {T} value
 * @property {Stack_Node<T>} [prev]
 */

/**
 * @template T
 * @typedef {Object} Queue_Node
 * @property {T} value
 * @property {Queue_Node<T>} [next]
 */

/**
 * @template T
 * @typedef {Object} List
 * @property {number} length
 * @property {function(number): T|undefined} remove_at
 * @property {function(T): T|undefined} remove
 * @property {function(number): T|undefined} get
 * @property {function(T): void} prepend
 * @property {function(T): void} append
 * @property {function(T, number): void} insert_at
 */

/**
 * @typedef {Object} Complete_Graph_Edge
 * @property {number} from
 * @property {number} to
 * @property {number} weight
 */

/**
 * @typedef {Object} Graph_Edge
 * @property {number} to
 * @property {number} weight
 */

/** @typedef {number[][]} Adjacency_List */
/** @typedef {number[][]} Adjacency_Matrix */
/** @typedef {Graph_Edge[][]} Weighted_Adjacency_List */
/** @typedef {number[][]} Weighted_Adjacency_Matrix */

/**
 * @template T
 * @typedef {Object} Binary_Node
 * @property {T} value
 * @property {Binary_Node<T>|null} left
 * @property {Binary_Node<T>|null} right
 */

/**
 * @template T
 * @typedef {Object} General_Node
 * @property {T} value
 * @property {General_Node<T>[]} children
 */

/**
 * @template K, V
 * @typedef {Object} Least_Recently_Used
 * @property {function(K, V): void} update
 * @property {function(K): V|undefined} get
 */
