This project was forked from: [ThePrimeagen](https://github.com/ThePrimeagen/kata-machine)

### Supported Algorithm

All the Agorithms are defined in `./src/interface.js`

#### need to work out what to do with

- Prim's MST (Adjacency List)
- Dijkstra's Shortest Path (Adjacency List)

### How It Works

Make sure you have [deno](https://deno.com).

clone the repo and install the dependencies.

```bash
deno task generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

#### Testing

```bash
deno test
```

### Help wanted

A simple way to specify test, thinking something like `tests.json` and `cat
test.json 2> /dev/null`
to specify the tests to run. tests.json wouldn't be committed.

## What's next?

Shockingly, most of the "data structures" of computer science, but few of the algorithms.
Tons of graph data structures
exotic tree algorithms

### data-structures vs algorithms

Let me break this down in a clear, intuitive way:

Data Structures are like containers or organizational systems - they're about HOW we store and organize data. Think of them like different types of storage solutions:

- Arrays are like a row of lockers, numbered sequentially
- Linked Lists are like a scavenger hunt, where each item points to the next
- Trees are like an organizational chart, with branches and hierarchies
- Hash Tables are like a library index card system, where items are stored based on a key

Algorithms, on the other hand, are the step-by-step instructions for working with those data structures - they're about WHAT we do with the data. For example:

- Sorting algorithms arrange items in order
- Search algorithms find specific items
- Graph algorithms find paths between points

Here's a practical example to tie them together:

```js
/**
 * @typedef {Object} PhoneDirectory
 * @property {number[]} phone_numbers - Array of phone numbers
 */

/**
 * @type {PhoneDirectory}
 */
const phone_directory = {
  phone_numbers: [5551234, 5555678, 5559012],
}

/**
 * Searches for a phone number in the directory
 * @param {number[]} numbers - Array of phone numbers to search through
 * @param {number} target - The phone number to find
 * @returns {boolean} True if number is found, false otherwise
 */
function find_number(numbers, target) {
  for (const number of numbers) {
    if (number === target) {
      return true
    }
  }
  return false
}

// Example usage
const is_found = find_number(phone_directory.phone_numbers, 5555678)
console.log(is_found) // true
```

The key relationship is that algorithms often depend on data structures, and different data structures make different algorithms more or less efficient. For instance:

- Searching through a sorted array can use binary search (very fast)
- Searching through a hash table is even faster for lookups
- But inserting into an array is slow, while inserting into a linked list is fast

Would you like me to elaborate on any particular aspect of this relationship?
