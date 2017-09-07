import Test from 'ava'
import { subtract } from '../../src/callbacks'

Test.cb(`subtract(x,y,callback) adds positive numbers together`, t => {
  subtract(1, 1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, 0)
    t.end()
  })
})

// Test.cb(`subtract(x,y,callback) adds positive and negative numbers together`, t => {
//   subtract(1, -1, (err, result) => {
//     if (err) t.fail(err)
//
//     t.is(result, -2)
//     t.end()
//   })
// })
//
//
// Test.cb(`subtract(x,y,callback) adds  negative numbers together`, t => {
//   subtract(-1, -1, (err, result) => {
//     if (err) t.fail(err)
//
//     t.is(result, -2)
//     t.end()
//   })
// })
