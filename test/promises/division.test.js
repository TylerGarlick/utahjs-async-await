import Test from 'ava'
import { divide } from '../../src/promises'

Test(`divide(values) two positive numbers`, async t => {
  const result = await divide(1, 2)
  t.is(result, .5)
})

Test(`divide(values) with a 0 throws`, async t => {
  const result = await t.throws(divide(1, 0))
  console.log(result)
  t.truthy(result.message, /divide/)
})

// Test(`subtract(values) four positive numbers`, async t => {
//   const result = await multiply(1, 1, 1, 1)
//   t.is(result, 1)
// })
//
// Test(`subtract(values) four negative numbers`, async t => {
//   const result = await multiply(-1, -1, -1, -1)
//   t.is(result, 1)
// })
