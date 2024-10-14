import Array_List from "@/Array_List"
import { test_list } from "@@/list-test"

/**
 * @typedef {import('interface').default} Array_List
 */
test("Array_List", () => {
  /** @type {Array_List<number>} */
  const list = new Array_List(3)
  test_list(list)
})
