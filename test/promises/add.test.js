import Test from 'ava'
import { add } from '../../src/promises'

Test(`add(values) two positive numbers`, async t => {
  const result = await add(1, 2)
  t.is(result, 3)
})

Test(`add(values) four positive numbers`, async t => {
  const result = await add(1, 1, 1, 1)
  t.is(result, 4)
})

Test(`add(values) four negative numbers`, async t => {
  const result = await add(-1, -1, -1, -1)
  t.is(result, -4)
})

