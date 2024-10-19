/**
 * @template K, V
 * @implements {Least_Recently_Used<K,V>}
 */
export const Least_Recently_Used = class {
  /**
   * @private
   * @type {number}
   */
  length
  constructor() {
    this.length = 0
    console.log(this.length)
  }

  /**
   * @param {K} key
   * @param {V} value
   * @returns {void}
   */
  update(key, value) {
    console.log(key, value)
  }

  /**
   * @param {K} key
   * @returns {V | undefined}
   */
  get(key) {
    console.log(key)
    return undefined
  }
}


/**
 * @template {string | number} T
 * @template V
 */
export const Map = class {
  constructor() {}

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  get(key) {
    console.log(key)
    return undefined
  }

  /**
   * @param {T} key
   * @param {V} value
   * @returns {void}
   */
  set(key, value) {
    console.log(key, value)
  }

  /**
   * @param {T} key
   * @returns {V | undefined}
   */
  delete(key) {
    console.log(key)
    return undefined
  }

  /**
   * @returns {number}
   */
  size() {
    return 0
  }
}




/**
 * @template K, V
 * @typedef {Object} Least_Recently_Used
 * @property {function(K, V): void} update
 * @property {function(K): V|undefined} get
 */
