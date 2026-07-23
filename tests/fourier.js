import {
  discrete_fourier_transform,
  fourier_magnitudes,
} from '@/fourier.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('fourier transform', () => {
  it('puts all the energy of a constant (DC-only) signal in bin 0', () => {
    const signal = [1, 1, 1, 1, 1, 1, 1, 1]

    const magnitudes = fourier_magnitudes(discrete_fourier_transform(signal))

    expect(magnitudes.length).toEqual(8)
    expect(magnitudes[0]).toBeCloseTo(8, 5)
    for (let i = 1; i < 8; i++) {
      expect(magnitudes[i]).toBeCloseTo(0, 5)
    }
  })

  it('finds a single-cycle cosine wave in its matching frequency bin', () => {
    const n = 8
    const signal = Array.from(
      { length: n },
      (_, i) => Math.cos((2 * Math.PI * i) / n),
    )

    const magnitudes = fourier_magnitudes(discrete_fourier_transform(signal))

    expect(magnitudes[0]).toBeCloseTo(0, 5)
    expect(magnitudes[1]).toBeCloseTo(4, 5)
    expect(magnitudes[7]).toBeCloseTo(4, 5)
  })
})
