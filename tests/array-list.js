import ArrayList from "@/array-list"
import { test_list } from "@@/list-test"


/**
 * @typedef {import('@/array-list').default} ArrayList
 */
test("array-list", () => {
  /** @type {ArrayList<number>} */
  const list = new ArrayList(3);
  test_list(list);
});
