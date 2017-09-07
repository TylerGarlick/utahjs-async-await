import Test from 'ava'
import { multiply } from '../../src/promises'

Test(`multiply(values) two positive numbers`, async t => {
  const result = await multiply(1, 2)
  t.is(result, 2)
})

Test(`multiply(values) four positive numbers`, async t => {
  const result = await multiply(1, 1, 1, 1)
  t.is(result, 1)
})

Test(`multiply(values) four negative numbers`, async t => {
  const result = await multiply(-1, -1, -1, -1)
  t.is(result, 1)
})
