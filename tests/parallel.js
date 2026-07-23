import {
  amdahls_law,
  dynamic_load_balance,
  static_load_balance,
} from '@/parallel.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('amdahls law', () => {
  it('computes theoretical speedup from the parallel fraction and processor count', () => {
    expect(amdahls_law(0.5, 4)).toBeCloseTo(1.6, 5)
    expect(amdahls_law(0.9, 10)).toBeCloseTo(5.263157894736842, 5)
  })

  it('approaches 1 / (1 - p) as processors go to infinity', () => {
    expect(amdahls_law(0.9, 1_000_000_000)).toBeCloseTo(10, 2)
  })
})

describe('static load balancing', () => {
  it('splits work evenly across workers up front, preserving order', () => {
    const items = Array.from({ length: 10 }, (_, i) => i + 1)
    const num_workers = 3

    const chunks = static_load_balance(items, num_workers)

    expect(chunks.length).toEqual(num_workers)
    expect(chunks.flat()).toEqual(items)

    const sizes = chunks.map((chunk) => chunk.length)
    expect(Math.max(...sizes) - Math.min(...sizes)).toBeLessThanOrEqual(1)
  })
})

describe('dynamic load balancing', () => {
  it('assigns every item to exactly one worker exactly once', () => {
    const items = Array.from({ length: 20 }, (_, i) => i + 1)
    const num_workers = 4

    const assignments = dynamic_load_balance(items, num_workers)

    expect(assignments.length).toEqual(num_workers)
    expect(assignments.flat().sort((a, b) => a - b)).toEqual(items)
  })
})
