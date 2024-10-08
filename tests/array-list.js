import ArrayList from "@/list-array"
import { test_list } from "@@/list-test"

/**
 * @typedef {import('@/types').default} ArrayList
 */
test("array-list", () => {
  /** @type {ArrayList<number>} */
  const list = new ArrayList(3);
  test_list(list);
});
