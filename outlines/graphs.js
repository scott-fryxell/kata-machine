/**
 * @typedef {Object} graph
 * @description A non-linear data structure consisting of vertices and edges
 * that connect these vertices. Used to represent relationships between entities.
 *
 * @property {Array<vertex>} vertices - The set of vertices in the graph
 * @property {Array<edge>} edges - The set of edges in the graph
 *
 * ### Components
 *
 * - Vertices (nodes): Points in the graph
 * - Edges: Lines connecting vertices
 *
 * ### Types
 *
 * - Directed (digraph): Edges have a direction
 * - Undirected: Edges have no direction
 *
 * ### Properties
 *
 * - Can be weighted or unweighted
 * - May be cyclic or acyclic
 * - Can be connected or disconnected
 *
 * ### Representations
 *
 * - Adjacency matrix
 * - Adjacency list
 *
 * ### Common Applications
 *
 * - Social networks
 * - Computer networks
 * - Maps and navigation systems
 * - Recommendation systems
 * - Dependency analysis
 */

/**
 * @typedef {Object} vertex
 * @property {*} value - The value stored in the vertex
 */

/**
 * @typedef {Object} edge
 * @property {vertex} start - The starting vertex of the edge
 * @property {vertex} end - The ending vertex of the edge
 * @property {number} [weight] - The weight of the edge (if applicable)
 */

/**
 * Adds a vertex to the graph
 * @param {graph} graph - The graph to modify
 * @param {*} value - The value to be stored in the new vertex
 * @returns {vertex} The newly created vertex
 *
 * ```javascript
 *   function add_vertex(graph, value) {
 *   // Implementation details...
 * }
 * ```
 */

/**
 * Adds an edge between two vertices in the graph
 * @param {graph} graph - The graph to modify
 * @param {vertex} start - The starting vertex of the edge
 * @param {vertex} end - The ending vertex of the edge
 * @param {number} [weight] - The weight of the edge (optional)
 * @returns {edge} The newly created edge
 *
 * ```javascript
 *  function add_edge(graph, start, end, weight) {
 *    // Implementation details...
 *  }
 * ```
 */

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
 * @returns {number[]|null}
 */
export const graph_breadth_first_list = (graph, source, needle) => {
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

// Dijkstra's Shortest Path Algorithm

/**
 * @typedef {Object} D_Graph
 * @property {number} node
 * @property {number} weight
 */

/**
 * ```js
 * class priority_queue {
 *   constructor() {
 *     this.heap = []
 *   }
 *
 *   parent = (i) => Math.floor((i - 1) / 2)
 *
 *   left_child = (i) => 2 * i + 1*
 *   right_child = (i) => 2 * i + 2
 *   enqueue = (element) => {
 *     this.heap.push(element)
 *     this.heapify_up(this.heap.length - 1)
 *   }
 *   dequeue = () => {
 *     if (this.heap.length === 0) return undefined
 *     if (this.heap.length === 1) return this.heap.pop()
 *
 *     const min = this.heap[0]
 *     this.heap[0] = this.heap.pop()
 *     this.heapify_down(0)
 *     return min
 *   }
 *
 *   heapify_up = (i) => {
 *     while (i > 0 && this.heap[this.parent(i)][1] > this.heap[i][1]) {
 *       ;[this.heap[i], this.heap[this.parent(i)]] = [
 *         this.heap[this.parent(i)],
 *         this.heap[i],
 *       ]
 *       i = this.parent(i)
 *     }
 *   }
 *   heapify_down = (i) => {
 *     let min_index = i
 *     const left = this.left_child(i)
 *     const right = this.right_child(i)
 *
 *     if (
 *       left < this.heap.length && this.heap[left][1] < this.heap[min_index][1]
 *     ) {
 *       min_index = left
 *     }
 *     if (
 *       right < this.heap.length && this.heap[right][1] < this.heap[min_index][1]
 *     ) {
 *       min_index = right
 *     }
 *
 *     if (i !== min_index) {
 *       ;[this.heap[i], this.heap[min_index]] = [
 *         this.heap[min_index],
 *         this.heap[i],
 *       ]
 *       this.heapify_down(min_index)
 *     }
 *   }
 *
 *   is_empty = () => this.heap.length === 0
 * }
 */

// https://claude.ai/chat/07845e1e-2c16-47f8-9020-4ccf8aca020f
/**
 * @typedef {Object} Edge
 * @property {number} node - The destination node
 * @property {number} weight - The weight of the edge
 */

/**
 * @typedef {Object.<number, Edge[]>} Graph
 */

/**
 * Finds the shortest path between two vertices using Dijkstra's algorithm
 * @param {number} source - Starting vertex
 * @param {number} sink - Ending vertex
 * @param {Weighted_Adjacency_List} graph - Graph represented as weighted adjacency list
 * @returns {number[]} - Array representing the shortest path
 */
const dijkstra_shortest_path = (source, sink, graph) => {
  throw new Error('not implemented')
}

/**
 * Implements Dijkstra's algorithm using an adjacency list
 * @param {Graph} graph - The graph represented as an adjacency list
 * @param {number} start - The starting node
 * @param {number} end - The ending node
 * @returns {Object} An object containing the shortest distance and the path
 * ```javascript
 * const dijkstra_shortest_path = (graph, start, end) => {
 *   const distances = {}
 *   const previous = {}
 *   const nodes = new Set()
 *
 *   // Initialize distances and add all nodes to the set
 *   for (const node in graph) {
 *     distances[node] = node == start ? 0 : Infinity
 *     previous[node] = null
 *     nodes.add(parseInt(node))
 *   }
 *
 *   while (nodes.size > 0) {
 *     // Find the node with the smallest distance
 *     let current = Array.from(nodes).reduce((min_node, node) =>
 *       distances[node] < distances[min_node] ? node : min_node
 *     )
 *
 *     // If we've reached the end node, construct and return the path
 *     if (current === end) {
 *       const path = []
 *       while (current !== null) {
 *         path.unshift(current)
 *         current = previous[current]
 *       }
 *       return { distance: distances[end], path }
 *     }
 *
 *     nodes.delete(current)
 *
 *     // Check all neighboring nodes
 *     for (const { node: neighbor, weight } of graph[current]) {
 *       if (!nodes.has(neighbor)) continue
 *
 *       const alt = distances[current] + weight
 *       if (alt < distances[neighbor]) {
 *         distances[neighbor] = alt
 *         previous[neighbor] = current
 *       }
 *     }
 *   }
 *
 *   // If we get here, there's no path to the end node
 *   return { distance: Infinity, path: [] }
 * }
 * // Example usage
 * const graph = {
 *   0: [{ node: 1, weight: 4 }, { node: 2, weight: 1 }],
 *   1: [{ node: 3, weight: 1 }],
 *   2: [{ node: 1, weight: 2 }, { node: 3, weight: 5 }],
 *   3: [{ node: 4, weight: 3 }],
 *   4: [],
 * }
 *
 * const result = dijkstra_shortest_path(graph, 0, 4)
 * console.log(`Shortest distance: ${result.distance}`)
 * console.log(`Shortest path: ${result.path.join(' -> ')}`)
 * ```
 */

/**
 * Implements Prim's Minimum Spanning Tree algorithm
 * @param {Weighted_Adjacency_List} graph - The weighted adjacency list representation of the graph
 * @returns {Weighted_Adjacency_List} A new adjacency list representing the minimum spanning tree
 *
 * ```javascript
 * const prims = (graph) => {
 *   const visited = new Set()
 *   const mst = Array.from({ length: graph.length }, () => [])
 *
 *   // Start from vertex 0
 *   visited.add(0)
 *
 *   // Continue until all vertices are included in MST
 *   while (visited.size < graph.length) {
 *     let min_weight = Infinity
 *     let min_edge = null
 *     let min_vertex = null
 *
 *     // Find minimum weight edge from visited vertices to unvisited vertices
 *     for (const vertex of visited) {
 *       for (const edge of graph[vertex]) {
 *         if (!visited.has(edge.to) && edge.weight < min_weight) {
 *           min_weight = edge.weight
 *           min_edge = edge
 *           min_vertex = vertex
 *         }
 *       }
 *     }
 *
 *     if (min_edge === null) break // Graph is disconnected
 *
 *     // Add edge to MST
 *     mst[min_vertex].push(min_edge)
 *     mst[min_edge.to].push({ to: min_vertex, weight: min_edge.weight })
 *     visited.add(min_edge.to)
 *   }
 *
 *   return mst
 * }
 * ```
 *
 * Example return value:
 * ```javascript
 * [
 *   [
 *     { to: 2, weight: 1 },
 *     { to: 1, weight: 3 }
 *   ],
 *   [
 *     { to: 0, weight: 3 },
 *     { to: 4, weight: 1 }
 *   ],
 *   [{ to: 0, weight: 1 }],
 *   [{ to: 6, weight: 1 }],
 *   [
 *     { to: 1, weight: 1 },
 *     { to: 5, weight: 2 }
 *   ],
 *   [
 *     { to: 4, weight: 2 },
 *     { to: 6, weight: 1 }
 *   ],
 *   [
 *     { to: 5, weight: 1 },
 *     { to: 3, weight: 1 }
 *   ]
 * ]
 * ```
 */
export const prims = (graph) => {
  console.log(graph)
  return []
}

/**
 * @typedef {Object} weighted_graph_edge
 * @property {number} node - The destination node
 * @property {number} weight - The weight of the edge
 */

/**
 * @typedef {Object.<number, weighted_graph_edge[]>} weighted_graph
 */

export {
  dijkstra_shortest_path,
  // ... other exports ...
}
