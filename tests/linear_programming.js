import { simplex_maximize } from '@/linear_programming.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('linear programming (simplex)', () => {
  it('solves the wyndor glass co. problem', () => {
    // maximize 3x + 5y
    // subject to:  x      <= 4
    //                 2y  <= 12
    //             3x + 2y <= 18
    const objective = [3, 5]
    const constraints = [
      [1, 0],
      [0, 2],
      [3, 2],
    ]
    const bounds = [4, 12, 18]

    const result = simplex_maximize(objective, constraints, bounds)

    expect(result.solution).toEqual([2, 6])
    expect(result.value).toEqual(36)
  })
})
