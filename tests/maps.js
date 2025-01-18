/**
 * @typedef {import('@/maps.js').Least_Recently_Used<string, number>} String_Number_LRU
 */

import { Map, Least_Recently_Used } from '@/maps.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'


describe('map tests', () => {
  it('map operations', () => {
    const map = new Map()
    map.set('foo', 55)
    expect(map.size()).toEqual(1)

    map.set('fool', 75)
    expect(map.size()).toEqual(2)

    map.set('foolish', 105)
    expect(map.size()).toEqual(3)

    map.set('bar', 69)
    expect(map.size()).toEqual(4)

    expect(map.get('bar')).toEqual(69)
    expect(map.get('blaz')).toEqual(undefined)

    map.delete('barblabr')
    expect(map.size()).toEqual(4)

    map.delete('bar')
    expect(map.size()).toEqual(3)
    expect(map.get('bar')).toEqual(undefined)
  })

  it('least recently used operations', () => {
    const lru = new Least_Recently_Used(3)

    expect(lru.get('foo')).toEqual(undefined)
    lru.update('foo', 69)
    expect(lru.get('foo')).toEqual(69)

    lru.update('bar', 420)
    expect(lru.get('bar')).toEqual(420)

    lru.update('baz', 1337)
    expect(lru.get('baz')).toEqual(1337)

    lru.update('ball', 69420)
    expect(lru.get('ball')).toEqual(69420)
    expect(lru.get('foo')).toEqual(undefined)
    expect(lru.get('bar')).toEqual(420)

    lru.update('foo', 69)
    expect(lru.get('bar')).toEqual(420)
    expect(lru.get('foo')).toEqual(69)

    // baz was removed since bar was accessed, moving it to front
    expect(lru.get('baz')).toEqual(undefined)
  })
})

