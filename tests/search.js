import { linear_search, binary_search, two_crystal_balls } from '@/search.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('search algorithms', () => {
  const test_array = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]

  it('binary search', () => {
    expect(binary_search(test_array, 69)).toEqual(true)
    expect(binary_search(test_array, 1336)).toEqual(false)
    expect(binary_search(test_array, 69420)).toEqual(true)
    expect(binary_search(test_array, 69421)).toEqual(false)
    expect(binary_search(test_array, 1)).toEqual(true)
    expect(binary_search(test_array, 0)).toEqual(false)
  })

  it('linear search', () => {
    expect(linear_search(test_array, 69)).toEqual(true)
    expect(linear_search(test_array, 1336)).toEqual(false)
    expect(linear_search(test_array, 69420)).toEqual(true)
    expect(linear_search(test_array, 69421)).toEqual(false)
    expect(linear_search(test_array, 1)).toEqual(true)
    expect(linear_search(test_array, 0)).toEqual(false)
  })

  it('two crystal balls', () => {
    const idx = Math.floor(Math.random() * 10000)
    const data = new Array(10000).fill(false)

    for (let i = idx; i < 10000; ++i) {
      data[i] = true
    }

    expect(two_crystal_balls(data)).toEqual(idx)
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1)
  })
})
