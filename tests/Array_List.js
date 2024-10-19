import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import Array_List from '@/Array_List.js'
import { test_list } from '@@/list-test.js'

/**
 * @typedef {import('./interface').default} Array_List
 */
describe('Array_List', () => {
  /** @type {Array_List<number>} */
  const list = new Array_List(3)
  test_list(list)
})
