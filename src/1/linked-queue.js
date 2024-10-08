/**
 * @template T
 * @typedef {Object} Node
 * @property {T} value
 * @property {Node<T>} [next]
 */

/**
 * @template T
 */
export default class Queue {
  /**
   * @private
   * @type {number}
   */
  length;

  /**
   * @private
   * @type {Node<T> | undefined}
   */
  head;

  /**
   * @private
   * @type {Node<T> | undefined}
   */
  tail;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  enqueue(item) {
    /**
     * @type {Node<T>}
     */
    const node = { value: item };
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }
    if (!this.head) {
      this.head = node;
      this.head.next = node;
    }
    this.tail.next = node;
    this.tail = node;
  }

  // first update head to point to the next value
  // then return out previous head
  /**
   * @returns {T | undefined}
   */
  deque() {
    if (!this.head) return undefined;
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;
    if (this.length === 0) this.tail = undefined;
    return head.value;
  }

  /**
   * @returns {T | undefined}
   */
  peek() {
    return this.head?.value;
  }
}
