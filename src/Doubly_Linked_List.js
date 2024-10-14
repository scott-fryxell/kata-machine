export const Doubly_Linked_List = class {
  /**
   * @description
   * This class implements a doubly linked list data structure.
   * It allows for storing elements in a linked list with both forward and backward pointers.
   *
   * Time Complexity:
   * - O(1) for both prepend and append operations.
   * - O(n) for insert_at and remove_at operations, where n is the number of elements in the list.
   *
   * Space Complexity: O(n) where n is the number of elements in the list.
   */

   /**
   * @type {number}
   * @private
   */
  length;

  constructor() {}

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {}

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {}

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {}

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  remove(item) {}

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {}

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
  }
}