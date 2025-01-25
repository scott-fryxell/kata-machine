/**
 * @template T
 * @typedef {Object} List_Node
 * @property {T} value
 * @property {List_Node<T>} [next]
 * @property {List_Node<T>} [prev]
 */

/**
 * @template T
 * @typedef {Object} Stack_Node
 * @property {T} value
 * @property {Stack_Node<T>} [prev]
 */

/**
 * @template T
 * @typedef {Object} Queue_Node
 * @property {T} value
 * @property {Queue_Node<T>} [next]
 */

/**
 * @template T
 * @typedef {Object} List
 * @property {number} length
 * @property {function(number): T|undefined} remove_at
 * @property {function(T): T|undefined} remove
 * @property {function(number): T|undefined} get
 * @property {function(T): void} prepend
 * @property {function(T): void} append
 * @property {function(T, number): void} insert_at
 */

/**
 * @template T
 */
export const Queue = class {
  /**
   * @type {number}
   */
  length

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
   */
  head

  /**
   * @private
   * @type {Queue_Node<T> | undefined}
   */
  tail

  constructor() {
    this.length = 0
    console.log(this.head, this.tail, this.length)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  enqueue(item) {
    console.log(item)
  }

  // first update head to point to the next value
  // then return out previous head
  /**
   * @returns {T | undefined}
   */
  deque() {
    return undefined
  }

  /**
   * @returns {T | undefined}
   */
  peek() {
    return undefined
  }
}

/**
 * @template T
 */
export const Stack = class {
  /**
   * @type {number}
   */
  length

  /**
   * @private
   * @type {Stack_Node<T> | undefined}
   */
  head

  constructor() {
    this.length = 0
    this.head = undefined
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  push(item) {
    console.log(item)
  }

  /**
   * @returns {T | undefined}
   */
  pop() {
    return undefined
  }

  /**
   * @returns {T | undefined}
   */
  peek() {
    return undefined
  }
}

/**
 * @template T
 * @implements {List<T>}
 */
export const Singly_Linked_List = class {
  /**
   * @type {number}
   */
  length

  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  remove(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}

/**
 * @template T
 * @implements {List<T>}
 */
export const Doubly_Linked_List = class {
  /**
   * @type {number}
   */
  length

  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @returns {T | undefined}
   */
  remove(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}

/**
 * @template T
 * @implements {List<T>}
 */
export const Array_List = class {
  /**
   * @type {number}
   */
  length

  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  prepend(item) {
    console.log(item)
  }

  /**
   * @param {T} item
   * @returns {void}
   */
  append(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {T} item
   * @returns {T|undefined}
   */
  remove(item) {
    console.log(item)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /**
   * @param {number} idx
   * @returns {T|undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}

/**
 * @template T
 */
export const Ring_Buffer = class {
  /**
   * @type {number}
   * @private
   */
  length

  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.length = capacity
    console.log(this.length)
  }

  /**
   * Shift an item to the beginning of the buffer
   * @param {T} item
   * @returns {void}
   */
  shift(item) {
    console.log(item)
  }

  /**
   * Remove from the beginning of the buffer
   * @returns {void}
   */
  unshift() {
    console.log('unshift')
  }

  /**
   * Add an item to the end of the buffer
   * @param {T} item
   * @returns {void}
   */
  push(item) {
    console.log(item)
  }

  /**
   * @returns {T | undefined}
   */
  pop() {
    console.log('pop')
    return undefined
  }

  /**
   * Get an item from anywhere in the buffer
   * @param {number} idx
   * @returns {T | undefined}
   */
  get(idx) {
    console.log(idx)
    return undefined
  }

  /** These next two methods will have the worst performance
   * as they will require shifting all the elements in the buffer
   */

  /**
   * Insert an item anywhere in the buffer
   * @param {T} item
   * @param {number} idx
   * @returns {void}
   */
  insert_at(item, idx) {
    console.log(item, idx)
  }

  /**
   * Remove an item from anywhere in the buffer
   * This will have the worst performance of all the methods
   * @param {number} idx
   * @returns {T | undefined}
   */
  remove_at(idx) {
    console.log(idx)
    return undefined
  }
}
