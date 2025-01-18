import {
  quick_sort,
  insertion_sort,
  merge_sort,
  bubble_sort
} from '@/sorting.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('sorting algorithms', () => {
  const get_test_array = () => [9, 3, 7, 4, 69, 420, 42]
  const sorted_array = [3, 4, 7, 9, 42, 69, 420]

  it('insertion sort', () => {
    const arr = get_test_array()
    insertion_sort(arr)
    expect(arr).toEqual(sorted_array)
  })

  it('quick sort', () => {
    const arr = get_test_array()
    quick_sort(arr)
    expect(arr).toEqual(sorted_array)
  })

  it('merge sort', () => {
    const arr = get_test_array()
    merge_sort(arr)
    expect(arr).toEqual(sorted_array)
  })

  it('bubble sort', () => {
    const arr = get_test_array()
    bubble_sort(arr)
    expect(arr).toEqual(sorted_array)
  })
})
