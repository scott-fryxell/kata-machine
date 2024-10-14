export const Queue = class {
  /**
   * @description
   * This class implements a queue data structure.
   * It allows for storing elements in a first-in, first-out (FIFO) manner.
   *
   * Time Complexity:
   * - O(1) for both enqueue and dequeue operations.
   * - O(1) for peek operation.
   *
   * Space Complexity: O(n) where n is the number of elements in the queue.
   */

   /**
   * @type {number}
   * @private
   */
  length;

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
   */
  head;

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
   */
  tail;

  constructor() {}

  /**
   * @param {T} item
   * @returns {void}
   */
  enqueue(item) {}

  // first update head to point to the next value
  // then return out previous head
  /**
   * @returns {T | undefined}
   */
  deque() {}

  /**
   * @returns {T | undefined}
   */
  peek() {}
}