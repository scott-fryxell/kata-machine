import Breadth_First_Search from "@/Breadth_First_Search";
import { tree } from "./tree"

test("bt bfs", () => {
  expect(bfs(tree, 45)).toEqual(true)
  expect(bfs(tree, 7)).toEqual(true)
  expect(bfs(tree, 69)).toEqual(false)
});
