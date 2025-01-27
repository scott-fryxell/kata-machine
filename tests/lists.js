/**
 * @typedef {import('@/lists.js').List<number>} List
 */

import {
  Array_List,
  Doubly_Linked_List,
  Queue,
  Ring_Buffer,
  Singly_Linked_List,
  Stack,
} from '@/lists.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('lists data structures', () => {
  it('array_list', () => {
    const list = new Array_List()
    test_list(list)
  })

  it('doubly_linked_list', () => {
    const list = new Doubly_Linked_List()
    test_list(list)
  })

  it('singly_linked_list', () => {
    const list = new Singly_Linked_List()
    test_list(list)
  })

  it('queue', () => {
    const list = new Queue()

    list.enqueue(5)
    list.enqueue(7)
    list.enqueue(9)

    expect(list.deque()).toEqual(5)
    expect(list.length).toEqual(2)

    list.enqueue(11)

    expect(list.deque()).toEqual(7)
    expect(list.deque()).toEqual(9)
    expect(list.peek()).toEqual(11)
    expect(list.deque()).toEqual(11)
    expect(list.deque()).toEqual(undefined)
    expect(list.length).toEqual(0)

    list.enqueue(69)
    expect(list.peek()).toEqual(69)
    expect(list.length).toEqual(1)
  })

  it('stack', () => {
    const list = new Stack()

    list.push(5)
    list.push(7)
    list.push(9)

    expect(list.pop()).toEqual(9)
    expect(list.length).toEqual(2)

    list.push(11)
    expect(list.pop()).toEqual(11)
    expect(list.pop()).toEqual(7)
    expect(list.peek()).toEqual(5)
    expect(list.pop()).toEqual(5)
    expect(list.pop()).toEqual(undefined)

    list.push(69)
    expect(list.peek()).toEqual(69)
    expect(list.length).toEqual(1)
  })

  it('ring_buffer', () => {
    const buffer = new Ring_Buffer(6)

    buffer.push(5)
    expect(buffer.pop()).toEqual(5)
    expect(buffer.pop()).toEqual(undefined)

    buffer.push(42)
    buffer.push(9)

    expect(buffer.pop()).toEqual(42)
    expect(buffer.pop()).toEqual(9)
    expect(buffer.pop()).toEqual(undefined)

    buffer.push(42)
    buffer.push(9)
    buffer.push(12)

    expect(buffer.get(2)).toEqual(12)
    expect(buffer.get(1)).toEqual(9)
    expect(buffer.get(0)).toEqual(42)

    buffer.push(42)
    buffer.push(9)
    buffer.push(12)
    expect(buffer.get(0)).toEqual(12)
    expect(buffer.get(1)).toEqual(9)
    expect(buffer.get(2)).toEqual(42)

    expect(buffer.unshift()).toEqual(12)

    expect(buffer.get(0)).toEqual(9)
    expect(buffer.get(1)).toEqual(42)
  })
})

/**
 * @param {List} list
 */
const test_list = (list) => {
  console.log('list', list)
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
