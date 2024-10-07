import ArrayList from "@/array-list";
import { test_list } from "@@/list-test";

test("array-list", function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});
