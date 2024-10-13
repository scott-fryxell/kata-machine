/**
 * Adds a node to a weighted adjacency list.
 * @param {import('@/interface.js').WeightedAdjacencyList} list - The weighted adjacency list.
 * @param {number} from - The source node.
 * @param {number} to - The destination node.
 * @param {number} weight - The weight of the edge.
 * @returns {void}
 */
export function add_node_list(list, from, to, weight) {
  let l = list[from];
  if (!l) l = list[from] = [];
  l.push({ to, weight });
}
