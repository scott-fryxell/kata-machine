/**
 * @template T
 */
export default class ArrayList {
  /**
   * @type {number}
   */
  length;

  constructor() {
    this.length = 0
  }

  /**
   * @param {number} item
   * @returns {void}
   */
  prepend(item) {
    this[this.length] = item;
    this.length++
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {

  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
    this[this.length] = item
    this.length++
  }

  /**
   * @param {T} item
   * @returns {T|undefined}
   */
  remove(item) {

  }

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  get(idx) {

  }

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  remove_at(idx) {

  }
}
