import { map_reduce, word_count_map_reduce } from '@/map_reduce.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('map reduce', () => {
  it('groups mapped key/value pairs by key and reduces each group', () => {
    const data = ['the', 'cat', 'sat', 'the', 'cat', 'the']

    const result = map_reduce(
      data,
      2,
      (word) => [word, 1],
      (counts) => counts.reduce((a, b) => a + b, 0),
    )

    expect(result.get('the')).toEqual(3)
    expect(result.get('cat')).toEqual(2)
    expect(result.get('sat')).toEqual(1)
    expect(result.size).toEqual(3)
  })

  it('word counts across documents', () => {
    const documents = [
      'the cat sat',
      'the cat ran',
      'the dog sat',
    ]

    const counts = word_count_map_reduce(documents, 2)

    expect(counts.get('the')).toEqual(3)
    expect(counts.get('cat')).toEqual(2)
    expect(counts.get('sat')).toEqual(2)
    expect(counts.get('ran')).toEqual(1)
    expect(counts.get('dog')).toEqual(1)
    expect(counts.size).toEqual(5)
  })
})
