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
 * @class PriorityQueue
 */
class priority_queue {
    constructor() {
        this.heap = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    left_child(i) {
        return 2 * i + 1;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    right_child(i) {
        return 2 * i + 2;
    }

    /**
     * @param {[number, number]} element
     */
    enqueue(element) {
        this.heap.push(element);
        this.heapify_up(this.heap.length - 1);
    }

    /**
     * @returns {[number, number] | undefined}
     */
    dequeue() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify_down(0);
        return min;
    }

    /**
     * @param {number} i
     */
    heapify_up(i) {
        while (i > 0 && this.heap[this.parent(i)][1] > this.heap[i][1]) {
            [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
            i = this.parent(i);
        }
    }

    /**
     * @param {number} i
     */
    heapify_down(i) {
        let min_index = i;
        const left = this.left_child(i);
        const right = this.right_child(i);

        if (left < this.heap.length && this.heap[left][1] < this.heap[min_index][1]) {
            min_index = left;
        }
        if (right < this.heap.length && this.heap[right][1] < this.heap[min_index][1]) {
            min_index = right;
        }

        if (i !== min_index) {
            [this.heap[i], this.heap[min_index]] = [this.heap[min_index], this.heap[i]];
            this.heapify_down(min_index);
        }
    }

    /**
     * @returns {boolean}
     */
    is_empty() {
        return this.heap.length === 0;
    }
}

/**
 * Implements Dijkstra's algorithm using a priority queue
 * @param {Graph} graph - The graph represented as an adjacency list
 * @param {number} start - The starting node
 * @param {number} end - The ending node
 * @returns {Object} An object containing the shortest distance and the path
 */
function dijkstra_shortest_path(graph, start, end) {
    const distances = {};
    const previous = {};
    const pq = new priority_queue();

    // Initialize distances
    for (const node in graph) {
        distances[node] = node == start ? 0 : Infinity;
        previous[node] = null;
    }

    pq.enqueue([start, 0]);

    while (!pq.is_empty()) {
        const [current, distance] = pq.dequeue();

        // If we've reached the end node, construct and return the path
        if (current === end) {
            const path = [];
            let node = end;
            while (node !== null) {
                path.unshift(node);
                node = previous[node];
            }
            return { distance: distances[end], path };
        }

        // If we've found a longer path, skip
        if (distance > distances[current]) continue;

        // Check all neighboring nodes
        for (const { node: neighbor, weight } of graph[current]) {
            const alt = distance + weight;
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = current;
                pq.enqueue([neighbor, alt]);
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
