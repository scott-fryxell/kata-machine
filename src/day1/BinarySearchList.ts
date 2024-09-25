// Assuming the array is ordered
// O(n)
// middle = lo + (hi - lo)/2
//  this is suseptable to off by one error
// high is inclusive
// assumes the array is sorted
export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0
  let high = haystack.length
  do {
    const middle = Math.floor(low + (high - low) / 2)
    const guess = haystack[middle]
    if (needle === guess) return true
    if (needle > guess) low = middle + 1
    else high = middle
  } while (low < high)
  return false
}



// low is inclusive high is exclusive
// export default function bs_list(haystack: number[], needle: number): boolean {
//   let low = 0
//   let high = haystack.length
//   do {
//     const middle = Math.floor(low + (high - low) / 2)
//     const guess = haystack[middle]
//     if (guess === needle) return true
//     if (guess > needle) high = middle
//     else low = middle + 1
//   } while (low < high)
//   return false
// }
