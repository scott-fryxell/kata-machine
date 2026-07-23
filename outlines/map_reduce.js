/**
 * @typedef {Object} map_reduce
 * @description A pattern for processing large datasets across many workers
 * in parallel: emit a key/value pair per item (the "map" step, fully
 * parallelizable), group the emitted pairs by key (the "shuffle"), then
 * combine every key's values down to a single result (the "reduce" step).
 *
 * ### Common uses
 * - Word count / log analysis over huge files
 * - Distributed data processing (Hadoop, Spark's RDD model)
 */

/**
 * @template T, K, V, R
 * @param {T[]} data
 * @param {number} num_workers - how many parallel workers run the map step
 * @param {function(T): [K, V]} map_fn - emits one key/value pair per item
 * @param {function(V[]): R} reduce_fn - combines all values for a single key
 * @returns {Map<K, R>}
 */
export const map_reduce = (data, num_workers, map_fn, reduce_fn) => {
  console.log(data, num_workers, map_fn, reduce_fn)
  return new Map()
}

/**
 * Classic MapReduce example: counts occurrences of each word across a set
 * of documents, built on top of {@link map_reduce}.
 * @param {string[]} documents
 * @param {number} num_workers
 * @returns {Map<string, number>}
 */
export const word_count_map_reduce = (documents, num_workers) => {
  console.log(documents, num_workers)
  return new Map()
}
