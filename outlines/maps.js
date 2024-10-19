/**
 * @template K, V
 * @implements {Least_Recently_Used<K,V>}
 */
export const Least_Recently_Used = class {
  /**
   * @private
   * @type {number}
   */
  length
  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {K} key
   * @param {V} value
   * @returns {void}
   */
  update(key, value) {
    console.log(key, value)
  }

  /**
   * @param {K} key
   * @returns {V | undefined}
   */
  get(key) {
    console.log(key)
    return undefined
  }
}


/**
 * @template {string | number} T
 * @template V
 */
export const Map = class {
  constructor() {}

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  get(key) {
    console.log(key)
    return undefined
  }

  /**
   * @param {T} key
   * @param {V} value
   * @returns {void}
   */
  set(key, value) {
    console.log(key, value)
  }

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  delete(key) {
    console.log(key)
    return undefined
  }

  /**
   * @returns {number}
   */
  size() {
    return 0
  }
}




/**
 * @template K, V
 * @typedef {Object} Least_Recently_Used
 * @property {function(K, V): void} update
 * @property {function(K): V|undefined} get
 */




/**
 * Bloom Filter Overview
 *
 * @description A Bloom filter is a probabilistic data structure used for efficient set membership testing.
 * It offers space efficiency at the cost of allowing a small probability of false positives.
 *
 * Key characteristics:
 * - Space-efficient: Uses minimal memory to represent set membership
 * - Probabilistic: Guarantees true negatives, but may have false positives
 * - Based on bit array: Utilizes a bit array and multiple hash functions
 * - Constant-time operations: O(1) for both insertion and membership checking
 * - No element removal: Standard implementation doesn't support removal
 * - Efficiency vs. Accuracy trade-off: Balances memory usage with false positive rate
 *
 * Common applications include caching, network routing, and database systems.
 *
 * Bloom Filter Comparison
 *
 * A Bloom filter is different from graphs or trees:
 *
 * 1. Bloom filter:
 *    - Linear structure (bit array)
 *    - No explicit connections between elements
 *    - Used for set membership tests
 *
 * 2. Graph:
 *    - Nodes connected by edges
 *    - Represents relationships between elements
 *    - Used for network-like problems, pathfinding, etc.
 *
 * 3. Tree:
 *    - Hierarchical structure
 *    - Nodes with parent-child relationships
 *    - Used for hierarchical data, searching, etc.
 *
 * Bloom filters use hash functions, which can be related to certain
 * tree or graph-based structures. However, the Bloom filter itself
 * is fundamentally a flat, linear structure.
 */

/**
 * Hash Function
 *
 * @typedef {Function} Hash
 * @description A hash function is a mathematical algorithm that maps data of arbitrary size to fixed-size values.
 * In the context of hash tables or hash maps, it's used to compute an index into an array of buckets or slots.
 *
 * Key characteristics:
 * - Deterministic: The same input always produces the same output
 * - Uniform distribution: Ideally distributes hash values evenly across the output range
 * - Efficiency: Computes quickly for any given input
 * - Avalanche effect: Small changes in input result in significantly different hash values
 *
 * @param {*} key - The input data to be hashed
 * @returns {number} The computed hash value, typically an integer
 *
 * Common uses:
 * - Index generation in hash tables
 * - Data integrity verification
 * - Cryptographic applications (when designed for such purposes)
 *
 * @example
 * ```javascript
 * const hash_function = (key) => {
 *   // Simple hash function for demonstration
 *   let hash = 0
 *   for (let i = 0; i < key.length; i++) {
 *     hash = ((hash << 5) - hash) + key.charCodeAt(i)
 *     hash = hash & hash // Convert to 32-bit integer
 *   }
 *   return Math.abs(hash)
 * }
 * ```
 */



/**
 * Hash Map Overview
 *
 * @description A hash (also known as hash table or hash map) is an associative data structure
 * that maps keys to values using a hash function. It provides fast access, insertion, and deletion
 * operations, typically with an average time complexity of O(1).
 *
 * Key characteristics:
 * @property {Function} hash_function Converts keys into array indices
 * @property {Array} buckets Stores key-value pairs, often implemented as an array of linked lists
 * @property {number} size Number of key-value pairs in the hash
 * @property {number} capacity Total number of buckets
 *
 * Common operations:
 * @method insert(key, value) Adds a new key-value pair
 * @method get(key) Retrieves the value associated with a key
 * @method delete(key) Removes a key-value pair
 * @method has(key) Checks if a key exists in the hash
 *
 * Performance:
 * - Average case: O(1) for insert, get, delete, and has operations
 * - Worst case: O(n) when many keys hash to the same bucket (collision)
 *
 * @example
 * const my_hash = new Hash()
 * my_hash.insert('name', 'Alice')
 * my_hash.get('name') // Returns 'Alice'
 *
 *
 * Hashes are widely used in various applications, including:
 * - Implementing associative arrays
 * - Database indexing
 * - Caching
 * - And more
 *
 * This widespread use is due to their efficiency in storing and retrieving key-value data.
 */

/**
 * @typedef {Object} Hash_Map
 *
 * @property {Hash} hash_function The hash function used by the hash data structure.
 * @property {Function} index_generation Generates an index from the hash value.
 * @property {Function} collision_resolution Handles cases when multiple keys hash to the same index.
 *
 * @description
 * A hash function is a crucial component of a hash data structure:
 *
 * 1. Key to Index Mapping:
 *    The hash function takes a key as input and produces a hash value.
 *    This hash value is then used to determine the index in the hash's underlying array.
 *
 * 2. Uniform Distribution:
 *    A good hash function aims to distribute keys uniformly across the available indices,
 *    minimizing collisions and ensuring efficient operations.
 *
 * 3. Deterministic Behavior:
 *    The hash function must always produce the same hash value for a given key,
 *    ensuring consistent retrieval of stored values.
 *
 * 4. Collision Handling:
 *    When multiple keys hash to the same index (collision), the hash data structure
 *    uses collision resolution techniques like chaining or open addressing.
 *
 * 5. Performance Impact:
 *    The efficiency of the hash function directly affects the performance of
 *    the hash data structure's operations (insert, get, delete).
 *
 * @example
 * ```javascript
 * const my_hash = {
 *   hash_function: (key) => {
 *     // Simple hash function implementation
 *     let hash = 0
 *     for (let i = 0; i < key.length; i++) {
 *       hash = ((hash << 5) - hash) + key.charCodeAt(i)
 *       hash = hash & hash // Convert to 32-bit integer
 *     }
 *     return Math.abs(hash)
 *   },
 *   index_generation: (hash_value, array_size) => hash_value % array_size,
 *   collision_resolution: (index, key, value, buckets) => {
 *     // Simple chaining implementation
 *     if (!buckets[index]) {
 *       buckets[index] = []
 *     }
 *     buckets[index].push([key, value])
 *   }
 * }
 * ```
 */




class Bloom_Filter {
  /**
   * @param {number} size - The size of the bit array
   * @param {number} num_hash_functions - The number of hash functions to use
   */
  constructor(size, num_hash_functions) {
    this.size = size
    this.num_hash_functions = num_hash_functions
    this.bit_array = new Array(size).fill(false)
  }

  /**
   * @param {string} item - The item to add to the Bloom filter
   */
  add(item) {
    const hashes = this.get_hash_values(item)
    for (const hash of hashes) {
      this.bit_array[hash] = true
    }
  }

  /**
   * @param {string} item - The item to check for presence in the Bloom filter
   * @returns {boolean} - True if the item might be in the set, false if it definitely is not
   */
  might_contain(item) {
    const hashes = this.get_hash_values(item)
    return hashes.every((hash) => this.bit_array[hash])
  }

  /**
   * @param {string} item - The item to hash
   * @returns {number[]} - An array of hash values
   */
  get_hash_values(item) {
    const hashes = []
    for (let i = 0; i < this.num_hash_functions; i++) {
      const hash = this.hash_function(item, i)
      hashes.push(hash % this.size)
    }
    return hashes
  }

  /**
   * @param {string} item - The item to hash
   * @param {number} seed - A seed value for the hash function
   * @returns {number} - A hash value
   */
  hash_function(item, seed) {
    let hash = 0
    for (let i = 0; i < item.length; i++) {
      hash = ((hash << 5) - hash + item.charCodeAt(i)) | 0
    }
    return Math.abs((hash + seed) | 0)
  }
}

// // Example usage
// const bloom_filter = new Bloom_Filter(1000, 3)

// bloom_filter.add('apple')
// bloom_filter.add('banana')
// bloom_filter.add('cherry')

// console.log(bloom_filter.might_contain('apple')) // true
// console.log(bloom_filter.might_contain('banana')) // true
// console.log(bloom_filter.might_contain('date')) // false (probably)


