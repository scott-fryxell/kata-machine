import MyMap from "@/maps";
import LRU from "@code/LRU";

("Map", function() {
    const map = new MyMap<string, number>();
    map.set("foo", 55);
    expect(map.size()).toEqual(1);
    map.set("fool", 75);
    expect(map.size()).toEqual(2);
    map.set("foolish", 105);
    expect(map.size()).toEqual(3);
    map.set("bar", 69);
    expect(map.size()).toEqual(4);


    expect(map.get("bar")).toEqual(69);
    expect(map.get("blaz")).toEqual(undefined);

    map.delete("barblabr");
    expect(map.size()).toEqual(4);

    map.delete("bar");
    expect(map.size()).toEqual(3);
    expect(map.get("bar")).toEqual(undefined);
});


test("LRU", function () {
    const lru = new LRU<string, number>(3) as ILRU<string, number>;

    expect(lru.get("foo")).toEqual(undefined);
    lru.update("foo", 69);
    expect(lru.get("foo")).toEqual(69);

    lru.update("bar", 420);
    expect(lru.get("bar")).toEqual(420);

    lru.update("baz", 1337);
    expect(lru.get("baz")).toEqual(1337);

    lru.update("ball", 69420);
    expect(lru.get("ball")).toEqual(69420);
    expect(lru.get("foo")).toEqual(undefined);
    expect(lru.get("bar")).toEqual(420);
    lru.update("foo", 69);
    expect(lru.get("bar")).toEqual(420);
    expect(lru.get("foo")).toEqual(69);

    // shouldn't of been deleted, but since bar was get'd, bar was added to the
    // front of the list, so baz became the end
    expect(lru.get("baz")).toEqual(undefined);
});

