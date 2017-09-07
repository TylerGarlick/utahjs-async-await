export const add = (...values) =>
  Promise.resolve(values.reduce((prev, current) => prev + current, 0))


export const subtract = (...values) =>
  Promise.resolve(values.reduce((prev, current) => prev - current, 0))

export const multiply = (...values) =>
  Promise.resolve(values.reduce((prev, current) => prev * current, 1))

export const divide = (x = 0, y = 1) => {
  if (y === 0) return Promise.reject(new Error(`Can't divide by 0`))
  return Promise.resolve(x / y)
}
