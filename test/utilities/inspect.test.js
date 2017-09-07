import Test from 'ava'
import { inspect } from '../../src/utilities'

Test(`inspect returns the proper value`, async t => {
  const value = { message: `Hello, UtahUS` }
  const result = inspect(value)
  t.truthy(result)
})
