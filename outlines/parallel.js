/**
 * @typedef {Object} parallel_algorithms
 * @description Running computation across multiple cores/threads, and
 * reasoning about whether it actually helps.
 *
 * ### Overhead of parallelism
 * - Splitting work, spawning threads, and merging results all cost time
 * - Below some problem size, that overhead outweighs the speedup
 *
 * ### Amdahl's law
 * - If a fraction `p` of a program can be parallelized (`1 - p` cannot),
 *   speedup with `n` processors is capped at:
 *   speedup(n) = 1 / ((1 - p) + p / n)
 * - As n -> infinity, speedup -> 1 / (1 - p)
 * - Optimizing the parallel part only helps as much as that part's share
 *   of total runtime
 *
 * ### Load balancing
 * - Work must be distributed evenly across cores or some sit idle while
 *   one is overloaded
 * - Strategies: static (split evenly up front) vs dynamic (workers pull
 *   the next chunk of work as they finish)
 */

/**
 * Theoretical speedup from Amdahl's law.
 * @param {number} parallel_fraction - fraction of runtime that can be parallelized (0-1)
 * @param {number} num_processors
 * @returns {number} theoretical speedup
 */
export const amdahls_law = (parallel_fraction, num_processors) => {
  console.log(parallel_fraction, num_processors)
  return 1
}

/**
 * Splits work items evenly across a fixed number of workers up front
 * (static load balancing).
 * @template T
 * @param {T[]} items
 * @param {number} num_workers
 * @returns {T[][]} one chunk of work per worker
 */
export const static_load_balance = (items, num_workers) => {
  console.log(items, num_workers)
  return []
}

/**
 * Dynamic load balancing: each worker pulls the next item from a shared
 * queue as soon as it's free, instead of working off a fixed pre-split
 * chunk.
 * @template T
 * @param {T[]} items
 * @param {number} num_workers
 * @returns {T[][]} the items each worker actually processed
 */
export const dynamic_load_balance = (items, num_workers) => {
  console.log(items, num_workers)
  return []
}
