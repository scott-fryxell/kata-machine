/**
 * @template T
 * @typedef {Object} Node
 * @property {T} value
 * @property {Node<T>} [prev]
 */

/**
 * @template T
 */
export default class Stack {
  /**
   * @type {number}
   */
  length;

  /**
   * @type {Node<T> | undefined}
   * @private
   */
  head;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  push(item) {
    this.length++;
    /**
     * @type {Node<T>}
     */
    const node = { value: item };

    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
  }

  /**
   * @returns {T | undefined}
   */
  pop() {
    this.length = Math.max(0, this.length - 1);

    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }
    /**
     * @type {Node<T>}
     */
    const head = this.head;

    this.head = head.prev;
    return head.value;
  }

  /**
   * @returns {T | undefined}
   */
  peek() {
    return this.head?.value;
  }
}
