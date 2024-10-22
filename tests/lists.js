import RingBuffer from "@/RingBuffer";
import SinglyLinkedList from "@code/SinglyLinkedList";
import Stack from "@code/Stack";
import Queue from "@code/Queue";
import LinkedList from '@/doubly_linked.js'

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


test('Doubly_Linked_List', () => {
  /** @type {import('interface').default} */
  const list = new LinkedList()
  test_list(list)
})
/**
 * @typedef {import('interface').default} List
 */

/**
 * Tests the functionality of a List implementation
 * @param {List<number>} list - The list to be tested
 */
function test_list(list) {
  list.append(5)
  list.append(7)
  list.append(9)

  expect(list.get(2)).toEqual(9)
  expect(list.remove_at(1)).toEqual(7)
  expect(list.length).toEqual(2)

  list.append(11)
  expect(list.remove_at(1)).toEqual(9)
  expect(list.remove(9)).toEqual(undefined)
  expect(list.remove_at(0)).toEqual(5)
  expect(list.remove_at(0)).toEqual(11)
  expect(list.length).toEqual(0)

  list.prepend(5)
  list.prepend(7)
  list.prepend(9)

  expect(list.get(2)).toEqual(5)
  expect(list.get(0)).toEqual(9)
  expect(list.remove(9)).toEqual(9)
  expect(list.length).toEqual(2)
  expect(list.get(0)).toEqual(7)
}


test("linked-list", function () {
    const list = new SinglyLinkedList<number>();
    test_list(list);
});

test("queue", function () {
  const list = new Queue<number>();

  list.enqueue(5);
  list.enqueue(7);
  list.enqueue(9);

  expect(list.deque()).toEqual(5);
  expect(list.length).toEqual(2);

  list.enqueue(11);

  expect(list.deque()).toEqual(7);
  expect(list.deque()).toEqual(9);
  expect(list.peek()).toEqual(11);
  expect(list.deque()).toEqual(11);
  expect(list.deque()).toEqual(undefined);
  expect(list.length).toEqual(0);

  // just wanted to make sure that I could not blow up myself when i remove
  // everything
  list.enqueue(69);
  expect(list.peek()).toEqual(69);
  expect(list.length).toEqual(1);
});


test("stack", function () {
    const list = new Stack<number>();

    list.push(5);
    list.push(7);
    list.push(9);

    expect(list.pop()).toEqual(9);
    expect(list.length).toEqual(2);

    list.push(11);
    expect(list.pop()).toEqual(11);
    expect(list.pop()).toEqual(7);
    expect(list.peek()).toEqual(5);
    expect(list.pop()).toEqual(5);
    expect(list.pop()).toEqual(undefined);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.push(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);

    //yayaya
});

test("RingBuffer", function() {
    const buffer = new RingBuffer<number>();

    buffer.push(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);

    expect(buffer.pop()).toEqual(42);
    expect(buffer.pop()).toEqual(9);
    expect(buffer.pop()).toEqual(undefined);

    buffer.append(42);
    buffer.append(9);
    buffer.append(12);

    expect(buffer.get(2)).toEqual(12);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.get(0)).toEqual(42);


    buffer.prepend(42);
    buffer.prepend(9);
    buffer.prepend(12);
    expect(buffer.get(0)).toEqual(12);
    expect(buffer.get(1)).toEqual(9);
    expect(buffer.get(2)).toEqual(42); // oldest node

    expect(buffer.unshift()).toEqual(12);

    expect(buffer.peek()).toEqual(9);

    expect(buffer.get(0)).toEqual(9);
    expect(buffer.get(1)).toEqual(42);

});




/**
 * @type {number[]}
 */
const a = []

/**
 * Measures the execution time of a given function.
 * @param {Function} fn - The function to be timed.
 * @returns {number} The execution time in milliseconds.
 */
const time = (fn) => {
  const now = Date.now()
  fn()
  return Date.now() - now
}

/**
 * @param {number} number
 */
const unshift = (number) => {
  for (let i = 0; i < number; ++i) {
    a.unshift(Math.random())
  }
}

/**
 * @param {number} number
 */
const shift = (number) => {
  for (let i = 0; i < number; ++i) {
    a.shift()
  }
}

/**
 * @param {number} number
 */
const push = (number) => {
  for (let i = 0; i < number; ++i) {
    a.push(Math.random())
  }
}

/**
 * @param {number} number
 */
const pop = (number) => {
  for (let i = 0; i < number; ++i) {
    a.pop()
  }
}

/**
 * @param {number} idx
 * @returns {function(): number}
 */
const get = (idx) => () => a[idx]

/**
 * @param {number} count
 * @returns {function(): void}
 */
const push_arr = (count) => () => push(count)

/**
 * @param {number} count
 * @returns {function(): void}
 */
const pop_arr = (count) => () => pop(count)

/**
 * @param {number} count
 * @returns {function(): void}
 */
const unshift_arr = (count) => () => unshift(count)

/**
 * @param {number} count
 * @returns {function(): void}
 */
const shift_arr = (count) => () => shift(count)

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000]
console.log('Testing get')
tests.forEach((t) => {
  a.length = 0
  push(t)
  console.log(t, time(get(t - 1)))
})

console.log('push')
tests.forEach((t) => {
  a.length = 0
  push(t)
  console.log(t, time(push_arr(1000)))
})

console.log('pop')
tests.forEach((t) => {
  a.length = 0
  push(t)
  console.log(t, time(pop_arr(1000)))
})

console.log('unshift')
tests.forEach((t) => {
  a.length = 0
  push(t)
  console.log(t, time(unshift_arr(1000)))
})

console.log('shift')
tests.forEach((t) => {
  a.length = 0
  push(t)
  console.log(t, time(shift_arr(1000)))
})
