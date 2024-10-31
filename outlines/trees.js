/**
 * @typedef {Object} binary_search_tree
 * @description A hierarchical data structure with the following properties:
 *
 * - Each node has at most two children (left and right)
 * - For any node:
 *   - All nodes in its left subtree have keys less than the node's key
 *   - All nodes in its right subtree have keys greater than the node's key
 * - Both left and right subtrees are also binary search trees
 *
 * @property {binary_search_tree|null} left - The left child of the node
 * @property {binary_search_tree|null} right - The right child of the node
 * @property {*} key - The key stored in the node
 *
 * ### Characteristics
 *
 * - Allows efficient searching, insertion, and deletion operations
 * - Average time complexity: O(log n) for balanced trees
 *
 * ### Common Uses
 *
 * - Implementing associative arrays (key-value pairs)
 * - Dynamic sets
 * - Lookup tables
 */


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
 * @template T
 * @typedef {Object} Binary_Node
 * @property {T} value
 * @property {Binary_Node<T>|null} left
 * @property {Binary_Node<T>|null} right
 */

/** @typedef {Binary_Node<number>} Binary_Tree */


/**
 * @template T
 * @typedef {Object} General_Node
 * @property {T} value
 * @property {General_Node<T>[]} children
 */



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
    return this.length
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
 * @typedef {Object} GraphEdge
 * @property {number} to
 * @property {number} weight
 */

/**
 * @typedef {GraphEdge[]} WeightedAdjacencyList
 */

/**
 * Prims algorithm :: minimum spanning tree
 * What is a minimum spanning tree?
 *  - Requires no cycles
 *  - For it to technically be a minimum spanning tree, the graph requires
 *  to be strongly connected
 * 1. Select starting node,
 * 2. put edges of current selected node into a list
 * 3. select edge that is the lowest value and to a node we haven't seen yet
 * 4. we need to insert the edge from current to new into our mst
 * 5. the newly selected node becomes the current node,
 * 6. repeate to step 2 until unvisited is empty or unreachable
 * ...
 * 8. $$
 *
 * @param {WeightedAdjacencyList} list
 * @returns {WeightedAdjacencyList | null}
 */
export default function prims(list) {
  /** @type {boolean[]} */
  const visited = new Array(list.length).fill(false)
  /** @type {GraphEdge[][]} */
  const mst = new Array(list.length).fill(null).map(() => [])

  // 1.
  visited[0] = true
  let current = 0

  /** @type {[number, GraphEdge][]} */
  const edges = []

  do {
    // 2. put all dem edges in the list
    for (const edge_me_daddy of list[current]) {
      edges.push([current, edge_me_daddy])
    }

    // 3. select edge that is the lowest value and to a node we haven't seen yet
    let lowest = Infinity
    /** @type {[number, GraphEdge | null]} */
    let lowest_edge = [-1, null]
    for (const edge of edges) {
      if (visited[edge[1].to] === false && edge[1].weight < lowest) {
        lowest = edge[1].weight
        lowest_edge = edge
      }
    }

    // 4. we need to insert the edge from current to new into our mst, set visited, and remove the potential edge
    if (lowest_edge[1] !== null) {
      mst[lowest_edge[0]].push(lowest_edge[1])
      mst[lowest_edge[1].to].push({
        to: lowest_edge[0],
        weight: lowest_edge[1].weight,
      })
      visited[lowest_edge[1].to] = true
      edges.splice(
        edges.indexOf(/** @type {[number, GraphEdge]} */ (lowest_edge)),
        1,
      )
    }

    // 5. the newly selected node becomes the current node
    current = lowest_edge[1]?.to || -1
  } while (visited.includes(false) && current >= 0)

  return mst
}

if (require.main === module) {
  prims([
    [ // 0
      { to: 2, weight: 1 },
      { to: 1, weight: 3 },
    ],
    [ // 1
      { to: 0, weight: 3 },
      { to: 4, weight: 1 },
      { to: 3, weight: 3 },
    ],
    [ // 2
      { to: 0, weight: 1 },
      { to: 3, weight: 7 },
    ],
    [ // 3
      { to: 6, weight: 1 },
      { to: 1, weight: 3 },
      { to: 2, weight: 7 },
    ],
    [ // 4
      { to: 1, weight: 1 },
      { to: 5, weight: 2 },
    ],
    [ // 5
      { to: 4, weight: 2 },
      { to: 6, weight: 1 },
    ],
    [ // 6
      { to: 5, weight: 1 },
      { to: 3, weight: 1 },
    ],
  ])
}