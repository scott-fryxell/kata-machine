import { Hyper_Log_Log } from '@/hyperloglog.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('hyperloglog', () => {
  it('estimates a large distinct count within a reasonable error band', () => {
    const hll = new Hyper_Log_Log(64)

    for (let i = 0; i < 5000; i++) {
      hll.add(`item-${i}`)
    }

    // 64 registers -> ~13% expected relative error, give it some slack
    const estimate = hll.estimate()
    expect(estimate).toBeGreaterThan(5000 * 0.8)
    expect(estimate).toBeLessThan(5000 * 1.2)
  })

  it('does not inflate the estimate when the same items are added twice', () => {
    const hll = new Hyper_Log_Log(64)

    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < 200; i++) {
        hll.add(`item-${i}`)
      }
    }

    const estimate = hll.estimate()
    expect(estimate).toBeGreaterThan(200 * 0.7)
    expect(estimate).toBeLessThan(200 * 1.3)
  })
})
