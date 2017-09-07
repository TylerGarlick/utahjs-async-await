import Test from 'ava'
import { subtract } from '../../src/promises'

Test(`subtract(values) two positive numbers`, async t => {
  const result = await subtract(1, 2)
  t.is(result, -3)
})

Test(`subtract(values) four positive numbers`, async t => {
  const result = await subtract(1, 1, 1, 1)
  t.is(result, -4)
})

Test(`subtract(values) four negative numbers`, async t => {
  const result = await subtract(-1, -1, -1, -1)
  t.is(result, 4)
})
