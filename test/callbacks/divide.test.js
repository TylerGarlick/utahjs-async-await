import Test from 'ava'
import { divide } from '../../src/callbacks'

Test.cb(`divide(x,y,callback) adds positive numbers together`, t => {
  divide(1, 1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, 1)
    t.end()
  })
})

Test.cb(`divide(x,y,callback) adds positive and negative numbers together`, t => {
  divide(1, -1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, -1)
    t.end()
  })
})


Test.cb(`divide(x,y,callback) adds  negative numbers together`, t => {
  divide(-1, -1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, 1)
    t.end()
  })
})
