import Test from 'ava'
import { add } from '../../src/callbacks'

Test.cb(`add(x,y,callback) adds positive numbers together`, t => {
  add(1, 1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, 2)
    t.end()
  })
})

Test.cb(`add(x,y,callback) adds positive and negative numbers together`, t => {
  add(1, -1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, 0)
    t.end()
  })
})


Test.cb(`add(x,y,callback) adds  negative numbers together`, t => {
  add(-1, -1, (err, result) => {
    if (err) t.fail(err)

    t.is(result, -2)
    t.end()
  })
})
