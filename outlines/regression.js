/**
 * @typedef {Object} linear_regression
 * @description Fits a straight line through a set of (x, y) points using
 * least squares, then predicts y for a new x. Gives you a live line of
 * prediction as points come in.
 *
 * ### How it works
 * - Compute the mean of x and the mean of y
 * - slope = sum((x - x_mean) * (y - y_mean)) / sum((x - x_mean)^2)
 * - intercept = y_mean - slope * x_mean
 * - predict(x) = slope * x + intercept
 *
 * ### Common uses
 * - Trend lines / forecasting
 * - Quick correlation checks before reaching for a bigger model
 * - Calibration curves in DSP and sensor data
 */

/**
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Linear_Model
 * @property {number} slope
 * @property {number} intercept
 */

/**
 * Fits a line to a set of points using ordinary least squares.
 * @param {Point[]} points
 * @returns {Linear_Model}
 */
export const fit_linear_regression = (points) => {
  console.log(points)
  return { slope: 0, intercept: 0 }
}

/**
 * Predicts y for a given x using a fitted line.
 * @param {Linear_Model} model
 * @param {number} x
 * @returns {number}
 */
export const predict_linear_regression = (model, x) => {
  console.log(model, x)
  return 0
}
