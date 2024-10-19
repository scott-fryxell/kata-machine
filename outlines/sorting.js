/**
 * @param {number[]} arr
 * @returns {void}
 */
export const quick_sort = (arr) => {
  console.log(arr)
}

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const merge_sort = (arr) => {
  console.log(arr)
}

/**
 * Performs an insertion sort on the given array.
 * @param {number[]} arr - The array to be sorted.
 * @returns {void}
 */
export const insertion_sort = (arr) => {
  console.log(arr)
  /**
   * @description
   * The critical point is that an array of one element is sorted, which is why i = 1 rather than 0.
   *
   * The critical part of this algorithm is the inner while loop. This loop shifts elements to the right
   * to make space for the current element. The number of swaps is proportional to the number of inversions
   * in the array, which is O(n^2) in the worst case.
   *
   * Time Complexity:
   * - Best-case: O(n) when the array is already sorted.
   * - Worst-case: O(n^2) when the array is sorted in reverse order.
   * - Average-case: O(n^2), since the number of comparisons and swaps is proportional to the number of inversions in the array.
   *
   * Space Complexity: O(1) as it sorts in-place.
   */

  /**
   * Example usage:
   * @example
   * let array = [64, 35, 25, 12, 22, 11, 90]
   * console.log("Unsorted array:", array)
   * insertion_sort(array)
   * console.log("Sorted array:", array) // [11, 12, 22, 25, 35, 64, 90]
   */
}

/**
 * @param {number[]} arr
 * @returns {void}
 */
export const bubble_sort = (arr) => {
  /**
   * @description Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
   * compares adjacent elements, and swaps them if they are in the wrong order.
   * The pass through the list is repeated until the list is sorted.
   *
   * Time Complexity:
   * - Best-case: O(n) when the array is already sorted.
   * - Worst-case: O(n^2) when the array is sorted in reverse order.
   * - Average-case: O(n^2), since the number of comparisons and swaps is proportional to the number of inversions in the array.
   */
  console.log(arr)
}
