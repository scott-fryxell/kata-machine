/**
 * @param {number[]} arr
 * @returns {void}
 */
export default function bubble_sort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {

      if (arr[j] > arr[j + 1]) {
        // swap
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }

    }
  }


}
