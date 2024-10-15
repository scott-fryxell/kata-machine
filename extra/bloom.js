/**
 * @class Bloom_Filter
 * @description A simple Bloom filter implementation
 */
class Bloom_Filter {
  /**
   * @param {number} size - The size of the bit array
   * @param {number} num_hash_functions - The number of hash functions to use
   */
  constructor(size, num_hash_functions) {
    this.size = size;
    this.num_hash_functions = num_hash_functions;
    this.bit_array = new Array(size).fill(false);
  }

  /**
   * @param {string} item - The item to add to the Bloom filter
   */
  add(item) {
    const hashes = this.get_hash_values(item);
    for (const hash of hashes) {
      this.bit_array[hash] = true;
    }
  }

  /**
   * @param {string} item - The item to check for presence in the Bloom filter
   * @returns {boolean} - True if the item might be in the set, false if it definitely is not
   */
  might_contain(item) {
    const hashes = this.get_hash_values(item);
    return hashes.every((hash) => this.bit_array[hash]);
  }

  /**
   * @param {string} item - The item to hash
   * @returns {number[]} - An array of hash values
   */
  get_hash_values(item) {
    const hashes = [];
    for (let i = 0; i < this.num_hash_functions; i++) {
      const hash = this.hash_function(item, i);
      hashes.push(hash % this.size);
    }
    return hashes;
  }

  /**
   * @param {string} item - The item to hash
   * @param {number} seed - A seed value for the hash function
   * @returns {number} - A hash value
   */
  hash_function(item, seed) {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = ((hash << 5) - hash + item.charCodeAt(i)) | 0;
    }
    return Math.abs((hash + seed) | 0);
  }
}

// Example usage
const bloom_filter = new Bloom_Filter(1000, 3);

bloom_filter.add('apple');
bloom_filter.add('banana');
bloom_filter.add('cherry');

console.log(bloom_filter.might_contain('apple')); // true
console.log(bloom_filter.might_contain('banana')); // true
console.log(bloom_filter.might_contain('date')); // false (probably)
