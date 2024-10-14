export const insertion_sort = (arr) => {
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