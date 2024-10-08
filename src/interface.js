
/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @template T
 * @typedef {Object} ListNode
 * @property {T} value
 * @property {ListNode<T>} [next]
 * @property {ListNode<T>} [prev]
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
 * @typedef {Object} CompleteGraphEdge
 * @property {number} from
 * @property {number} to
 * @property {number} weight
 */

/**
 * @typedef {Object} GraphEdge
 * @property {number} to
 * @property {number} weight
 */

/** @typedef {GraphEdge[][]} WeightedAdjacencyList */
/** @typedef {number[][]} WeightedAdjacencyMatrix */
/** @typedef {number[][]} AdjacencyList */
/** @typedef {number[][]} AdjacencyMatrix */
/**
 * @template T
 * @typedef {Object} BinaryNode
 * @property {T} value
 * @property {BinaryNode<T>|null} left
 * @property {BinaryNode<T>|null} right
 */

/**
 * @template T
 * @typedef {Object} GeneralNode
 * @property {T} value
 * @property {GeneralNode<T>[]} children
 */

/**
 * @template K, V
 * @typedef {Object} ILRU
 * @property {function(K, V): void} update
 * @property {function(K): V|undefined} get
 */


/**
 * Given two crystal balls that will break if dropped from high enough distance,
 * determine the exact spot in which crystal ball will break in the most optimized way.
 * The breaks list could represent each floor of a building.
 *
 * @param {boolean[]} breaks - An array of boolean values representing whether the ball breaks at each floor.
 * @returns {number} The index where the ball first breaks, or -1 if it never breaks.
 */
export const two_crystal_balls = breaks => {}

// search
/**
 * @param {number[]} haystack
 * @param {number} needle
 * @returns {boolean}
 */
export const linear_search = (haystack, needle) => {}

/**
 * @param {number[]} haystack - The sorted array to search in
 * @param {number} needle - The value to search for
 * @returns {boolean} - True if the needle is found, false otherwise
 */
export default function binary_search(haystack, needle) {}


// Sort

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const quick_sort = arr => {}

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const merge_sort = arr => {}

/**
 * Performs an insertion sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {void}
 */
export const insertion_sort = arr => {
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
   * let array = [64, 35, 25, 12, 22, 11, 90];
   * console.log("Unsorted array:", array);
   * insertion_sort(array);
   * console.log("Sorted array:", array); // [11, 12, 22, 25, 35, 64, 90]
   */
}

/**
 * @description
 * Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 *
 * Time Complexity:
 * - Best-case: O(n) when the array is already sorted.
 * - Worst-case: O(n^2) when the array is sorted in reverse order.
 * - Average-case: O(n^2), since the number of comparisons and swaps is proportional to the number of inversions in the array.
 *
 * @param {number[]} arr
 * @returns {void}
 */
export const bubble_sort = arr => {}

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @param {string[]} maze
 * @param {string} wall
 * @param {Point} start
 * @param {Point} end
 * @returns {Point[]}
 */
export const maze_solver = (maze, wall, start, end) => {}



// linkedlist

/**
 * @template T
 * @typedef {Object} QueueNode
 * @property {T} value
 * @property {QueueNode<T>} [next]
 */

/**
 * @template T
 */
export const Queue = class {
  /**
   * @private
   * @type {number}
   */
  length;

  /**
   * @private
   * @type {QueueNode<T> | undefined}
   */
  head;

  /**
   * @private
   * @type {QueueNode<T> | undefined}
   */
  tail;

  constructor() {}

  /**
   * @param {T} item
   * @returns {void}
   */
  enqueue(item) {}

  // first update head to point to the next value
  // then return out previous head
  /**
   * @returns {T | undefined}
   */
  deque() {}

  /**
   * @returns {T | undefined}
   */
  peek() {}
}

/**
 * @template T
 * @typedef {Object} StackNode
 * @property {T} value
 * @property {StackNode<T>} [prev]
 */

/**
 * @template T
 */
export const Stack = class {
  /**
   * @type {number}
   */
  length;
  /**
   * @type {StackNode<T> | undefined}
   * @private
   */
  head;
  constructor() {}

  /**
   * @param {T} item
   * @returns {void}
   */
  push(item) {}

  /**
   * @returns {T | undefined}
   */
  pop() {}

  /**
   * @returns {T | undefined}
   */
  peek() {}
}

/**
 * @template T
 */
export const SinglyLinkedList = class {
  /**
   * @type {number}
   */
  length;
  constructor() {}

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {}

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {}

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {}

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  remove(item) {}

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {}

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {}
}

/**
 * @template T
 */
export default class DoublyLinkedList {
  /**
   * @type {number}
   */
  length;

  constructor() {
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
  }

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  remove(item) {
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
  }
}


// ArrayList

/**
 * @template T
 */
export const ArrayList = class {
  /**
   * @type {number}
   */
  length;
  constructor() {}

  /**
   * @param {number} item
   * @returns {void}
   */
  prepend(item) {}

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {}

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {}

  /**
   * @param {T} item
   * @returns {T|undefined}
   */
  remove(item) {}

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  get(idx) {}

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  remove_at(idx) {}
}
/**
 * @template T
 */
export const RingBuffer = class {
  /**
   * @type {number}
   */
  length;

  /**
   * @param {number} initial_size
   */
  constructor(initial_size) {}

  /**
   * Shift an item to the beginning of the buffer
   * @param {T} item
   * @returns {void}
   */
  shift(item) {}

  /**
   * Remove from the beginning of the buffer
   * @param {T} item
   * @returns {void}
   */
  unshift(item) {}

  /**
   * Add an item to the end of the buffer
   * @param {T} item
   * @returns {void}
   */
  push(item) {}

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  pop(item) {}

  /**
   * Get an item from anywhere in the buffer
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {}

  /** These next two methods will have the worst performance
   * as they will require shifting all the elements in the buffer
   **/

  /**
   * Insert an item anywhere in the buffer
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {}

  /**
   * Remove an item from anywhere in the buffer
   * This will have the worst performance of all the methods
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {}
}


// other data structures

/**
 * @class MinHeap
 */
export const MinHeap = class {
  /**
   * @type {number}
   */
  length
  constructor() {
  }
  /**
   * @param {number} value
   * @returns {void}
   */
  insert(value) {
  }
  /**
   * @returns {number}
   */
  delete() {
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
  insert(item) {}

  /**
   * Deletes an item from the Trie.
   * @param {string} item - The item to delete.
   * @returns {void}
   */
  delete(item) {}

  /**
   * Finds all items in the Trie that start with the given partial string.
   * @param {string} partial - The partial string to search for.
   * @returns {string[]} An array of matching items.
   */
  find(partial) {}
}

/**
 * @template {string | number} T
 * @template V
 */
export const Map = class {
  constructor() {
  }

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  get(key) {}

  /**
   * @param {T} key
   * @param {V} value
   * @returns {void}
   */
  set(key, value) {}

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  delete(key) {}

  /**
   * @returns {number}
   */
  size() {}
}


/**
 * @template K, V
 */
export const LeastRecentlyUsed = class {
  /**
   * @private
   * @type {number}
   */
  length;

  constructor() {}

  /**
   * @param {K} key
   * @param {V} value
   * @returns {void}
   */
  update(key, value) {}

  /**
   * @param {K} key
   * @returns {V | undefined}
   */
  get(key) {}
}


// graph

/**
 * @param {WeightedAdjacencyList} list - The weighted adjacency list.
 * @param {number} from - The source node.
 * @param {number} to - The destination node.
 * @param {number} weight - The weight of the edge.
 * @returns {void}
 */
export const graph_add_node_list = (list, from, to, weight) => {}

/**
 * @param {WeightedAdjacencyMatrix} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[]|null}
 */
export const graph_breadth_first_search_matrix = (graph, source, needle) => {}

/**
 * @param {WeightedAdjacencyList} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[] | null}
 */
export const graph_depth_first_search_list = (graph, source, needle) => {}



// btree

/**
 * @param {BinaryNode<number>} head
 * @returns {number[]}
 */
export const btree_pre_order_search = head => {}

/**
 * @param {BinaryNode<number>} head
 * @returns {number[]}
 */
export const btree_post_order_search = head => {}

/**
 * @param {BinaryNode<number>} head
 * @returns {number[]}
 */
export const btree_in_order_search = head => {}

/**
 * @param {BinaryNode<number>} head
 * @param {number} needle
 * @returns {boolean}
 */
export const btree_depth_first_search = (head, needle) => {}


/**
 * @param {BinaryNode<number> | null} a
 * @param {BinaryNode<number> | null} b
 * @returns {boolean}
 */
export const btree_compare = (a, b) => {}


/**
 * @param {BinaryNode<number>} head
 * @param {number} needle
 * @returns {boolean}
 */
export const btree_breadth_first_search = (head, needle) => {}
