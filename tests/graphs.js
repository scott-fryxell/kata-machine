/**
 * @typedef {import('@/graphs.js').Weighted_Adjacency_List} Weighted_Adjacency_List
 * @typedef {import('@/graphs.js').Weighted_Adjacency_Matrix} Weighted_Adjacency_Matrix
 */

import {
  graph_depth_first_list,
  graph_breadth_first_matrix,
  graph_breadth_first_list,
  dijkstra_shortest_path,
  prims
} from '@/graphs.js'

import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('graph tests', () => {
  it('graph breadth first search - list', () => {
    expect(graph_breadth_first_list(list2, 0, 6)).toEqual([
      0,
      1,
      4,
      5,
      6
    ])

    expect(graph_breadth_first_list(list2, 6, 0)).toEqual(null)
  })

  it('graph breadth first search - matrix', () => {
    expect(graph_breadth_first_matrix(matrix2, 0, 6)).toEqual([
      0,
      1,
      4,
      5,
      6
    ])

    expect(graph_breadth_first_matrix(matrix2, 6, 0)).toEqual(null)
  })

  it('graph depth first search - list', () => {
    expect(graph_depth_first_list(list2, 0, 6)).toEqual([
      0,
      1,
      4,
      5,
      6
    ])

    expect(graph_depth_first_list(list2, 6, 0)).toEqual(null)
  })

  it('prims algorithm', () => {
    expect(prims(list1)).toEqual([
      [
        { to: 2, weight: 1 },
        { to: 1, weight: 3 }
      ],
      [
        { to: 0, weight: 3 },
        { to: 4, weight: 1 }
      ],
      [{ to: 0, weight: 1 }],
      [{ to: 6, weight: 1 }],
      [
        { to: 1, weight: 1 },
        { to: 5, weight: 2 }
      ],
      [
        { to: 4, weight: 2 },
        { to: 6, weight: 1 }
      ],
      [
        { to: 5, weight: 1 },
        { to: 3, weight: 1 }
      ]
    ])
  })

  it('dijkstra shortest path', () => {
    expect(dijkstra_shortest_path(0, 6, list1)).toEqual([0, 1, 4, 5, 6])
  })
})

/**
 * @type {Weighted_Adjacency_List}
 */
export const list1 = []

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
list1[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 }
]
list1[1] = [
  { to: 0, weight: 3 },
  { to: 2, weight: 4 },
  { to: 4, weight: 1 }
]
list1[2] = [
  { to: 1, weight: 4 },
  { to: 3, weight: 7 },
  { to: 0, weight: 1 }
]
list1[3] = [
  { to: 2, weight: 7 },
  { to: 4, weight: 5 },
  { to: 6, weight: 1 }
]
list1[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 }
]
list1[5] = [
  { to: 6, weight: 1 },
  { to: 4, weight: 2 },
  { to: 2, weight: 18 }
]
list1[6] = [
  { to: 3, weight: 1 },
  { to: 5, weight: 1 }
]

/**
 * @type {Weighted_Adjacency_List}
 */
export const list2 = []

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list2[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 }
]
list2[1] = [
  { to: 4, weight: 1 }
]
list2[2] = [
  { to: 3, weight: 7 }
]
list2[3] = []
list2[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 }
]
list2[5] = [
  { to: 2, weight: 18 },
  { to: 6, weight: 1 }
]
list2[6] = [
  { to: 3, weight: 1 }
]

/**
 * @type {Weighted_Adjacency_Matrix}
 */
export const matrix2 = [
  [0, 3, 1, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 5, 0, 2, 0],
  [0, 0, 18, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1]
]

