import {
  fit_linear_regression,
  predict_linear_regression,
} from '@/regression.js'
import { describe, it } from 'jsr:@std/testing/bdd'
import { expect } from 'jsr:@std/expect'

describe('linear regression', () => {
  it('fits a perfectly linear data set exactly', () => {
    const points = [
      { x: 1, y: 3 },
      { x: 2, y: 5 },
      { x: 3, y: 7 },
      { x: 4, y: 9 },
    ]

    const model = fit_linear_regression(points)

    expect(model.slope).toEqual(2)
    expect(model.intercept).toEqual(1)
    expect(predict_linear_regression(model, 10)).toEqual(21)
  })

  it('fits noisy data via least squares', () => {
    const points = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 6 },
    ]

    const model = fit_linear_regression(points)

    expect(model.slope).toEqual(1.2)
    expect(model.intercept).toEqual(-0.2)
  })
})
