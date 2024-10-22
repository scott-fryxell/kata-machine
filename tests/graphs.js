import prims from '@code/PrimsAlgorithm'
import dfs_list from '@code/DFSGraphList'
import bfs_matrix from '@code/BFSGraphMatrix'
import bfs_list from '@/BFSGraphList'


test('bfs - graph', function () {
  expect(bfs_list(list2, 0, 6)).toEqual([
    0,
    1,
    4,
    5,
    6,
  ])

  expect(bfs_list(list2, 6, 0)).toEqual(null)
})


test('bfs - graph matrix', function () {
  expect(bfs_matrix(matrix2, 0, 6)).toEqual([
    0,
    1,
    4,
    5,
    6,
  ])

  expect(bfs_matrix(matrix2, 6, 0)).toEqual(null)
})


test('dfs - graph', function () {
  expect(dfs_list(list2, 0, 6)).toEqual([
    0,
    1,
    4,
    5,
    6,
  ])

  expect(dfs_list(list2, 6, 0)).toEqual(null)
})


test('PrimsAlgorithm', function () {
  // there is only one right answer for this graph
  expect(prims(list1)).toEqual([
    [
      { to: 2, weight: 1 },
      { to: 1, weight: 3 },
    ],
    [
      { to: 0, weight: 3 },
      { to: 4, weight: 1 },
    ],
    [{ to: 0, weight: 1 }],
    [{ to: 6, weight: 1 }],
    [
      { to: 1, weight: 1 },
      { to: 5, weight: 2 },
    ],
    [
      { to: 4, weight: 2 },
      { to: 6, weight: 1 },
    ],
    [
      { to: 5, weight: 1 },
      { to: 3, weight: 1 },
    ],
  ])
})

import dijkstra_list from '@/lists/dijkstra'
import { list1 } from '@@/graph'

test('dijkstra via adj list', function () {
  /// waht?
  // what..
  // what...
  expect(dijkstra_list(0, 6, list1)).toEqual([0, 1, 4, 5, 6])
})



export const list1: WeightedAdjacencyList = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
list1[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list1[1] = [
    { to: 0, weight: 3 },
    { to: 2, weight: 4 },
    { to: 4, weight: 1 },
];
list1[2] = [
    { to: 1, weight: 4 },
    { to: 3, weight: 7 },
    { to: 0, weight: 1 },
];
list1[3] = [
    { to: 2, weight: 7 },
    { to: 4, weight: 5 },
    { to: 6, weight: 1 },
];
list1[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list1[5] = [
    { to: 6, weight: 1 },
    { to: 4, weight: 2 },
    { to: 2, weight: 18 },
];
list1[6] = [
    { to: 3, weight: 1 },
    { to: 5, weight: 1 },
];

export const list2: WeightedAdjacencyList = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list2[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list2[1] = [
    { to: 4, weight: 1 },
];
list2[2] = [
    { to: 3, weight: 7 },
];
list2[3] = [ ];
list2[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list2[5] = [
    { to: 2, weight: 18 },
    { to: 6, weight: 1 },
];
list2[6] = [
    { to: 3, weight: 1 },
];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
export const matrix2: WeightedAdjacencyMatrix = [
    [0, 3, 1,  0, 0, 0, 0], // 0
    [0, 0, 0,  0, 1, 0, 0],
    [0, 0, 7,  0, 0, 0, 0],
    [0, 0, 0,  0, 0, 0, 0],
    [0, 1, 0,  5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0,  1, 0, 0, 1],
];

