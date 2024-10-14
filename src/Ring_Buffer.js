export const Ring_Buffer = class {
  /**
   * @description
   * This class implements a Ring Buffer (Circular Buffer) data structure.
   * It allows for storing elements in a fixed-size buffer that automatically overwrites the oldest elements when the buffer is full.
   *
   * Time Complexity:
   * - O(1) for both shift and unshift operations.
   * - O(n) for push and pop operations, where n is the number of elements in the buffer.
   *
   * @type {number}
   * @private
   */
  length;

  /**
   * @param {number} initial_size
   */
  constructor(initial_size) {}

  /**
   * Shift an item to the beginning of the buffer
   * @param {T} item
   * @returns {void}
   */
  shift(item) {}

  /**
   * Remove from the beginning of the buffer
   * @param {T} item
   * @returns {void}
   */
  unshift(item) {}

  /**
   * Add an item to the end of the buffer
   * @param {T} item
   * @returns {void}
   */
  push(item) {}

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  pop(item) {}

  /**
   * Get an item from anywhere in the buffer
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {}

  /** These next two methods will have the worst performance
   * as they will require shifting all the elements in the buffer
   */

  /**
   * Insert an item anywhere in the buffer
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {}

  /**
   * Remove an item from anywhere in the buffer
   * This will have the worst performance of all the methods
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {}
}