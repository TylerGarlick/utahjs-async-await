import Util from 'util'

const INSPECT_DEFAULTS = { showHidden: true, depth: null, showProxy: true }


const promise = Promise.resolve({ message: 'Hello World' })
console.log(Reflect.get(promise, 'then'))
console.log(Reflect.get(promise, 'catch'))

// promise is an instance of a Promise

// Notice the object?
// { message: 'Hello World' }
console.log(Util.inspect(promise, { showHidden: true, depth: null }))



export const inspect = (value = {}, options = INSPECT_DEFAULTS) => Util.inspect(value, options)
