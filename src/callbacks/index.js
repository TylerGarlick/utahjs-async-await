/**
 * Adds two numbers together
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @param {function} callback - (err, result)
 */
export const add = (x, y, callback) => callback(null, x + y)

/**
 * Subtract
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @param {Function} callback - (err, result)
 */
export const subtract = (x, y, callback) => callback(null, x - y)

/**
 * Multiply
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @param {Function} callback - (err, result)
 */
export const multiply = (x, y, callback) => callback(null, x * y)

/**
 * Division
 *
 * @param {Number} x
 * @param {Number} y
 *
 * @param {Function} callback - (err, result)
 */
export const divide = (x, y, callback) => callback(null, x / y)
