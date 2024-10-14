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
/** @typedef {number[][]} Adjacency_Matrix */ s;
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

/**
 * Given two crystal balls that will break if dropped from high enough distance,
 * determine the exact spot in which crystal ball will break in the most optimized way.
 * The breaks list could represent each floor of a building.
 *
 * @param {boolean[]} breaks - An array of boolean values representing whether the ball breaks at each floor.
 * @returns {number} The index where the ball first breaks, or -1 if it never breaks.
 */
export const two_crystal_balls = (breaks) => {
  /**
   * @description
   * This function uses two crystal balls to determine the exact spot in which the ball will break.
   * It works by jumping 2 floors at a time, and if the ball breaks, it will return the index of the floor.
   * If the ball does not break, it will continue to jump 2 floors at a time until it finds the floor where the ball breaks.
   *
   * Time Complexity:
   * - O(sqrt(n)) where n is the number of floors in the building.
   */
};

/**
 * @param {number[]} haystack
 * @param {number} needle
 * @returns {boolean}
 */
export const linear_search = (haystack, needle) => {
  /**
   * @description
   * Linear search is a simple search algorithm that iterates through the array elements one by one until it finds the target value.
   *
   * Time Complexity:
   * - O(n) for both search and insert operations.
   */
};

/**
 * @param {number[]} haystack - The sorted array to search in
 * @param {number} needle - The value to search for
 * @returns {boolean} - True if the needle is found, false otherwise
 */
export const binary_search = (haystack, needle) => {
  /**
   * @description
   * Binary search is an efficient algorithm for finding an element in a sorted array.
   * It works by repeatedly dividing the search interval in half and comparing the middle element with the target value.
   *
   * Time Complexity:
   * - O(log n) for both search and insert operations.
   */
};

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const quick_sort = (arr) => {
  /**
   * @description
   * Quick sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
   * according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
   *
   * Time Complexity:
   * - Best-case: O(n log n) when the pivot divides the array into two nearly equal halves.
   * - Worst-case: O(n^2) when the pivot is consistently the smallest or largest element, causing unbalanced partitions.
   * - Average-case: O(n log n), since the number of comparisons and swaps is proportional to the number of inversions in the array.
   */
};

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const merge_sort = (arr) => {
  /**
   * @description
   * Merge sort is a divide-and-conquer algorithm that works by dividing the array into two halves,
   * sorting each half, and then merging the two sorted halves back together.
   *
   * Time Complexity:
   * - O(n log n) for both search and insert operations.
   */
};

/**
 * Performs an insertion sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {void}
 */
export const insertion_sort = (arr) => {
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
};

/**
 *
 * @param {number[]} arr
 * @returns {void}
 */
export const bubble_sort = (arr) => {
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
   */
};

/**
 * @param {string[]} maze
 * @param {string} wall
 * @param {Point} start
 * @param {Point} end
 * @returns {Point[]}
 */
export const maze_solver = (maze, wall, start, end) => {
  /**
   * @description
   * This function solves a maze using a depth-first search (DFS) algorithm.
   * It explores the maze from the start point to the end point, marking visited cells to avoid redundancy.
   *
   * Time Complexity:
   * - O(V + E) where V is the number of vertices (cells) and E is the number of edges (possible moves).
   *
   * Space Complexity: O(V) for the visited set and recursion stack.
   */
};

/**
 * @template T
 */
export const Queue = class {
  /**
   * @description
   * This class implements a queue data structure.
   * It allows for storing elements in a first-in, first-out (FIFO) manner.
   *
   * Time Complexity:
   * - O(1) for both enqueue and dequeue operations.
   * - O(1) for peek operation.
   *
   * Space Complexity: O(n) where n is the number of elements in the queue.
   */

   /**
   * @type {number}
   * @private
   */
  length;

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
   */
  head;

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
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
};

/**
 * @template T
 */
export const Stack = class {
  /**
   * @description
   * This class implements a stack data structure.
   * It allows for storing elements in a last-in, first-out (LIFO) manner.
   *
   * Time Complexity:
   * - O(1) for both push and pop operations.
   * - O(1) for peek operation.
   *
   * Space Complexity: O(n) where n is the number of elements in the stack.
   */

   /**
   * @type {number}
   * @private
   */
  length;

  /**
   * @type {Stack_Node<T> | undefined}
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
};

/**
 * @template T
 */
export const Singly_Linked_List = class {
  /**
   * @description
   * This class implements a singly linked list data structure.
   * It allows for storing elements in a linked list with only forward pointers.
   *
   * Time Complexity:
   * - O(1) for both prepend and append operations.
   * - O(n) for insert_at and remove_at operations, where n is the number of elements in the list.
   *
   * Space Complexity: O(n) where n is the number of elements in the list.
   */

  /**
   * @type {number}
   * @private
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
};

/**
 * @template T
 */
export const Doubly_Linked_List = class {
  /**
   * @description
   * This class implements a doubly linked list data structure.
   * It allows for storing elements in a linked list with both forward and backward pointers.
   *
   * Time Complexity:
   * - O(1) for both prepend and append operations.
   * - O(n) for insert_at and remove_at operations, where n is the number of elements in the list.
   *
   * Space Complexity: O(n) where n is the number of elements in the list.
   */

   /**
   * @type {number}
   * @private
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
  remove_at(idx) {
  }
};

/**
 * @template T
 */
export const Array_List = class {
  /**
   * @description
   * This class implements a dynamic array data structure.
   * It allows for storing elements in a contiguous block of memory and automatically resizing when the array is full.
   *
   * Time Complexity:
   * - O(1) for both get and set operations.
   * - O(n) for insert and delete operations, where n is the number of elements in the array.
   *
   * Space Complexity: O(n) where n is the number of elements in the array.
   */

   /**
   * @type {number}
   * @private
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
};
/**
 * @template T
 */
export const Ring_Buffer = class {
  /**
   * @description
   * This class implements a Ring Buffer (Circular Buffer) data structure.
   * It allows for storing elements in a fixed-size buffer that automatically overwrites the oldest elements when the buffer is full.
   *
   * Time Complexity:
   * - O(1) for both shift and unshift operations.
   * - O(n) for push and pop operations, where n is the number of elements in the buffer.
   *
   * @type {number}
   * @private
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
   */

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
};

// other data structures

/**
 * @class MinHeap
 */
export const Min_Heap = class {
  /**
   * @description
   * This class implements a Min Heap data structure.
   * It allows for storing elements in a way that the smallest element is always at the root.
   *
   * Time Complexity:
   * - O(log n) for both insert and delete operations.
   */
  /**
   * @type {number}
   * @private
   */
  length;
  constructor() {}
  /**
   * @param {number} value
   * @returns {void}
   */
  insert(value) {}
  /**
   * @returns {number}
   */
  delete() {}
};

export const Trie = class {
  /**
   * @description
   * This class implements a Trie data structure.
   * It allows for storing and searching strings efficiently.
   *
   * Time Complexity:
   * - O(m) for insertion and search operations, where m is the length of the string.
   */
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
};

/**
 * @template {string | number} T
 * @template V
 */
export const Map = class {
  /**
   * @description
   * This class implements a simple map using a JavaScript object.
   * It allows for storing key-value pairs and retrieving values by their keys.
   *
   * Time Complexity:
   * - O(1) for both get and set operations.
   *
   * Space Complexity: O(n) where n is the number of elements in the map.
   */
  constructor() {}

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
};

/**
 * @template K, V
 * @implements {Least_Recently_Used}
 */
export const Least_Recently_Used = class {
  /**
   * @description
   * This class implements the Least Recently Used (LRU) cache mechanism.
   * It maintains a fixed number of elements by removing the least recently used item when the cache is full.
   *
   * Time Complexity:
   * - O(1) for both get and update operations.
   *
   * Space Complexity: O(n) where n is the number of elements in the cache.
   */

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
};

/**
 * @param {Weighted_Adjacency_List} list - The weighted adjacency list.
 * @param {number} from - The source node.
 * @param {number} to - The destination node.
 * @param {number} weight - The weight of the edge.
 * @returns {void}
 */
export const graph_breadth_first_list = (list, from, to, weight) => {
  /**
   * @description
   * The breadth-first search algorithm is a graph algorithm that traverses the graph level by level.
   * It starts at the source node and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
   *
   * Time Complexity:
   * - O(V + E) where V is the number of vertices and E is the number of edges.
   *
   * Space Complexity: O(V) where V is the number of vertices.
   */

  /**
   * Example usage:
   * @example
   * let graph = [
   *   [[1, 4], [2, 3]],
   *   [[2, 1]],
   *   [[3, 1]],
   *   []
   * ]
   * graph_breadth_first_list(graph, 0, 3, 1)
   */
};

/**
 * @param {Weighted_Adjacency_Matrix} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[]|null}
 */
export const graph_breadth_first_matrix = (graph, source, needle) => {
  /**
   * @description
   * The breadth-first search algorithm is a graph algorithm that traverses the graph level by level.
   * It starts at the source node and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
   *
   * Time Complexity:
   * - O(V + E) where V is the number of vertices and E is the number of edges.
   *
   * Space Complexity: O(V) where V is the number of vertices.
   */
};


/**
 * @param {Weighted_Adjacency_List} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[] | null}
 */
export const graph_depth_first_list = (graph, source, needle) => {
  /**
   * @description
   * The depth-first search algorithm is a graph algorithm that traverses the graph depth-first.
   * It starts at the source node and explores as far as possible along each branch before backtracking.
   *
   * Time Complexity:
   * - O(V + E) where V is the number of vertices and E is the number of edges.
   *
   * Space Complexity: O(V) where V is the number of vertices.
   */

};

/**
 * @param {Weighted_Adjacency_Matrix} graph
 * @param {number} source
 * @param {number} needle
 * @returns {number[] | null}
 */
export const graph_depth_first_matrix = (graph, source, needle) => {
  /**
   * @description
   * The depth-first search algorithm is a graph algorithm that traverses the graph depth-first.
   * It starts at the source node and explores as far as possible along each branch before backtracking.
   *
   * Time Complexity:
   * - O(V + E) where V is the number of vertices and E is the number of edges.
   *
   * Space Complexity: O(V) where V is the number of vertices.
   */
};

/**
 * @param {Binary_Node<number> | null} a
 * @param {Binary_Node<number> | null} b
 * @returns {boolean}
 */
export const btree_compare = (a, b) => {
  /**
   * @description
   * This function compares two binary trees to determine if they are identical in both structure and node values.
   * It uses a recursive approach to traverse both trees simultaneously, comparing nodes and their children.
   *
   * Time Complexity:
   * - O(n) where n is the number of nodes in the tree.
   *
   * Space Complexity: O(h) where h is the height of the tree.
   */
};

/**
 * @param {Binary_Node<number>} head
 * @returns {number[]}
 */
export const btree_pre_order = (head) => {
  /**
   * @description
   * This function performs a pre-order traversal of a binary tree.
   * It visits the current node first, then recursively visits the left and right subtrees.
   *
   * Time Complexity:
   * - O(n) where n is the number of nodes in the tree.
   */
};

/**
 * @param {Binary_Node<number>} head
 * @returns {number[]}
 */
export const btree_post_order = (head) => {
  /**
   * @description
   * This function performs a post-order traversal of a binary tree.
   * It recursively visits the left and right subtrees first, then the current node.
   *
   * Time Complexity:
   * - O(n) where n is the number of nodes in the tree.
   */
};

/**
 * @param {Binary_Node<number>} head
 * @returns {number[]}
 */
export const btree_in_order = (head) => {
  /**
   * @description
   * This function performs an in-order traversal of a binary tree.
   * It recursively visits the left subtree, then the current node, then the right subtree.
   *
   * Time Complexity:
   * - O(n) where n is the number of nodes in the tree.
   */
};

/**
 * @param {Binary_Node<number>} head
 * @param {number} needle
 * @returns {boolean}
 */
export const btree_depth_first = (head, needle) => {
  /**
   * @description
   * This function performs a depth-first search of a binary tree.
   * It uses a recursive approach to traverse the tree, exploring as far as possible along each branch before backtracking.
   *
   * Time Complexity:
   * - O(n) where n is the number of nodes in the tree.
   */
};

/**
 * @param {Binary_Node<number>} head
 * @param {number} needle
 * @returns {boolean}
 */
export const btree_breadth_first = (head, needle) => {
  /**
   * @description
   * This function performs a breadth-first search of a binary tree.
   * It uses a queue to traverse the tree level by level, starting from the root.
   *
   * Time Complexity:
   * - O(n) where n is the number of nodes in the tree.
   */
};
