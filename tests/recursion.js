import { maze_solver } from '@/recursion.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

describe('recursion', () => {
  it('maze solver', () => {
    const maze = [
      'xxxxxxxxxx x',
      'x        x x',
      'x        x x',
      'x xxxxxxxx x',
      'x          x',
      'x xxxxxxxxxx',
    ]

    const maze_result = [
      { x: 10, y: 0 },
      { x: 10, y: 1 },
      { x: 10, y: 2 },
      { x: 10, y: 3 },
      { x: 10, y: 4 },
      { x: 9, y: 4 },
      { x: 8, y: 4 },
      { x: 7, y: 4 },
      { x: 6, y: 4 },
      { x: 5, y: 4 },
      { x: 4, y: 4 },
      { x: 3, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
    ]

    // there is only one path through
    const result = maze_solver(
      maze,
      'x',
      { x: 10, y: 0 },
      { x: 1, y: 5 },
    )
    expect(draw_path(maze, result)).toEqual(draw_path(maze, maze_result))
  })
})

/**
 * @param {string[]} data
 * @param {Point[]} path
 * @returns {string[]}
 */
const draw_path = (data, path) => {
  const data2 = data.map((row) => row.split(''))
  path.forEach((p) => {
    if (data2[p.y] && data2[p.y][p.x]) {
      data2[p.y][p.x] = '*'
    }
  })
  return data2.map((d) => d.join(''))
}
