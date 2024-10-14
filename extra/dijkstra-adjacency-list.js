/**
 * @typedef {Object} Edge
 * @property {number} node - The destination node
 * @property {number} weight - The weight of the edge
 */

/**
 * @typedef {Object.<number, Edge[]>} Graph
 */

/**
 * Implements Dijkstra's algorithm using an adjacency list
 * @param {Graph} graph - The graph represented as an adjacency list
 * @param {number} start - The starting node
 * @param {number} end - The ending node
 * @returns {Object} An object containing the shortest distance and the path
 */
function dijkstra_shortest_path(graph, start, end) {
    const distances = {};
    const previous = {};
    const nodes = new Set();

    // Initialize distances and add all nodes to the set
    for (const node in graph) {
        distances[node] = node == start ? 0 : Infinity;
        previous[node] = null;
        nodes.add(parseInt(node));
    }

    while (nodes.size > 0) {
        // Find the node with the smallest distance
        let current = Array.from(nodes).reduce((min_node, node) => 
            distances[node] < distances[min_node] ? node : min_node
        );

        // If we've reached the end node, construct and return the path
        if (current === end) {
            const path = [];
            while (current !== null) {
                path.unshift(current);
                current = previous[current];
            }
            return { distance: distances[end], path };
        }

        nodes.delete(current);

        // Check all neighboring nodes
        for (const { node: neighbor, weight } of graph[current]) {
            if (!nodes.has(neighbor)) continue;

            const alt = distances[current] + weight;
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = current;
            }
        }
    }

    // If we get here, there's no path to the end node
    return { distance: Infinity, path: [] };
}

// Example usage
const graph = {
    0: [{ node: 1, weight: 4 }, { node: 2, weight: 1 }],
    1: [{ node: 3, weight: 1 }],
    2: [{ node: 1, weight: 2 }, { node: 3, weight: 5 }],
    3: [{ node: 4, weight: 3 }],
    4: []
};

const result = dijkstra_shortest_path(graph, 0, 4);
console.log(`Shortest distance: ${result.distance}`);
console.log(`Shortest path: ${result.path.join(' -> ')}`);
