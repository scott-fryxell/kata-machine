/**
 * @param {number[]} arr
 * @returns {void}
 */
export default function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
}

// Example usage
// let array = [64, 35, 25, 12, 22, 11, 90];
// console.log("Unsorted array:", array);
// insertion_sort(array) // [11, 12, 22, 25, 35, 64, 90]
// console.log("Sorted array:", array );

// the critical point is that an array of one element is sorted which is why i = 1 rather than 0

// The critical part of this algorithm is the inner while loop. This loop shifts elements to the right to make space for the current element. The number of swaps is proportional to the number of inversions in the array, which is O(n^2) in the worst case.

// The best-case time complexity is O(n) when the array is already sorted.

// The worst-case time complexity is O(n^2) when the array is sorted in reverse order.

// The average-case time complexity is O(n^2) as well, since the number of comparisons and swaps is proportional to the number of inversions in the array.

// Space Complexity:
