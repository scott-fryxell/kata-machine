import { Inverted_Index } from '@/inverted_index.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('inverted index', () => {
  it('finds documents containing every term in the query', () => {
    const index = new Inverted_Index()

    index.add_document(0, 'the quick brown fox')
    index.add_document(1, 'the lazy brown dog')
    index.add_document(2, 'the quick fox jumps')

    expect(index.search('quick fox').sort()).toEqual([0, 2])
    expect(index.search('brown').sort()).toEqual([0, 1])
    expect(index.search('quick brown').sort()).toEqual([0])
    expect(index.search('the').sort()).toEqual([0, 1, 2])
    expect(index.search('missing').sort()).toEqual([])
  })
})
