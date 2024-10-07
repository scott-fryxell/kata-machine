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
