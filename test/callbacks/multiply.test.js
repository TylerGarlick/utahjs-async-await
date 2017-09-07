import Test from 'ava'
import { multiply } from '../../src/callbacks'

Test.cb(`multiply(x,y,callback) adds positive numbers together`, t => {
  multiply(1, 1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, 1)
    t.end()
  })
})

Test.cb(`multiply(x,y,callback) adds positive and negative numbers together`, t => {
  multiply(1, -1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, -1)
    t.end()
  })
})


// Test.cb(`multiply(x,y,callback) adds  negative numbers together`, t => {
//   multiply(-1, -1, (err, result) => {
//     if (err) t.fail(err)
//
//     t.is(result, 2)
//     t.end()
//   })
// })
