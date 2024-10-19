import two_crystal_balls from '@/two_crystal_balls'
import { expect } from "jsr:@std/expect";

test('two crystal balls', () => {
  let idx = Math.floor(Math.random() * 10000)
  const data = new Array(10000).fill(false)

  for (let i = idx; i < 10000; ++i) {
    data[i] = true
  }

  expect(two_crystal_balls(data)).toEqual(idx)
  expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1)
})
