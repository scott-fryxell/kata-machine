/**
 * @typedef {Object} hyperloglog
 * @description Estimates the number of *distinct* items in a stream using a
 * tiny, fixed amount of memory - trading perfect accuracy for a
 * probabilistic estimate (typically within a couple percent). Pairs with
 * the Bloom filter: a Bloom filter answers "have I seen this item before?",
 * HyperLogLog answers "how many different items have I seen?".
 *
 * ### How it works
 * - Hash each incoming item to a (pseudo-)uniform random bit string
 * - Split the hash into a register index (first few bits) and the rest
 * - Track, per register, the longest run of leading zeros seen in the
 *   remaining bits - a longer run is exponentially rarer, so it hints at
 *   a larger number of distinct items
 * - Combine all registers (harmonic mean) into a single cardinality
 *   estimate
 *
 * ### Common uses
 * - Counting unique visitors/queries at massive scale (Redis PFCOUNT,
 *   analytics pipelines) without storing every item ever seen
 */

export const Hyper_Log_Log = class {
  /**
   * @param {number} num_registers - more registers = more accuracy, more memory
   */
  constructor(num_registers) {
    this.num_registers = num_registers
    this.registers = new Array(num_registers).fill(0)
  }

  /**
   * @param {string} item
   * @returns {void}
   */
  add(item) {
    console.log(item)
  }

  /**
   * @returns {number} estimated count of distinct items added so far
   */
  estimate() {
    return 0
  }
}
