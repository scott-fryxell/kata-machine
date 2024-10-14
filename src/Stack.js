export const Stack = class {
  /**
   * @description
   * This class implements a stack data structure.
   * It allows for storing elements in a last-in, first-out (LIFO) manner.
   *
   * Time Complexity:
   * - O(1) for both push and pop operations.
   * - O(1) for peek operation.
   *
   * Space Complexity: O(n) where n is the number of elements in the stack.
   */

   /**
   * @type {number}
   * @private
   */
  length;

  /**
   * @type {Stack_Node<T> | undefined}
   * @private
   */
  head;

  constructor() {}

  /**
   * @param {T} item
   * @returns {void}
   */
  push(item) {}

  /**
   * @returns {T | undefined}
   */
  pop() {}

  /**
   * @returns {T | undefined}
   */
  peek() {}
}