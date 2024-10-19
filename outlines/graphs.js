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
*```
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
