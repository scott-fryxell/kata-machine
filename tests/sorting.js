import quick_sort from '@code/QuickSort'

import insertion_sort from '@code/InsertionSort'

test('insertion-sort', function () {
  const arr = [9, 3, 7, 4, 69, 420, 42]
  // debugger
  insertion_sort(arr)
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420])
})


test('quick-sort', function () {
  const arr = [9, 3, 7, 4, 69, 420, 42]
  // debugger
  quick_sort(arr)
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420])
})
import merge_sort from '@code/MergeSort'

test('merge-sort', function () {
  const arr = [9, 3, 7, 4, 69, 420, 42]
  merge_sort(arr)
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420])
})

import bubble_sort from '@/bubble_sort.js'

test('bubble-sort', () => {
  const arr = [9, 3, 7, 4, 69, 420, 42]

  debugger
  bubble_sort(arr)
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420])
})
