# What is a Promise?

> WTH is a Promise? Why use them? What are they?!?

## * Promise vs promise (Statics vs Instances)

When I speak about promises, we need to talk about an "instance" versus the Promise object that contains static helper functions.  For this I say the "P"romise is where the static functions live (Promise.resolve, Promise.catch, Promise.all, Promise.series).

I often refer to an instance with the "p"romise.  If that is vague, think of the instance as when we use the 'new' operator with a class.  It's a specific kind of an object (like a Person, Car, etc).  Referring to an instance, we typically name the variable something like: bob, hummer, etc.

That is how I classify the differences.

---

### Surprise! A promise is just a simple object with 2 functions

> It's (simplistically for discussion) just an object literal `{}` with two functions: then, catch

#### Wait?! What?! ...

Engineers over complicate things in our mental models.  It really is as simple as `{ then(), catch() }`

For discussion purposes, let's consider:

```js
/**
* This isn't what is exactly happening,
* but you get the point.  
* 
* Notice that it's an object literal, not a prototypical object, nor a class.
*/
const promiseInstance = { 
  
  // Called in the future, after the asynchronous code is done executing and no errors occur
  then(callback) { return callback(...results) },
  
  // Called when an error occurs, and stops further execution in the promise chain (won't continue) 
  catch(callback) { return callback(err) }
}
````

#### WTH? What does it mean?

When you return something like `Promise.resolve()` it returns `{ then, catch }`.  This is interesting because when we provide a function inside the `.then` or `.catch` those functions will be called depending on the state.  More or less it's a fancy callback function.


## Promise (static functions)

### Promise.resolve()

> Syntactic sugar to wrap a value in a promise

`Promise.resolve()` is just a fancy way to ensure the `.then` function is executed.  An instance of a promise is returned and the .then(callback) is called (delegated).  More or less, it's a the object without the .catch(callback) function.

The Promise.resolve is syntactic sugar to more or less to wrap a value in a Promise.  The benefit in wrapping something in a promise.then function is the ability to chain work flows without the _**Callback Hell**_ or what I like to call _**The Cone of Shame**_.

This might not be apparent yet, but it's actually quite handy.


### Promise.catch()

> Syntactic sugar to throw an error


