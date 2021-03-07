/* 🚨 🚨 🚨  head(array)
Do not use slice(), splice(), pop(), or shift() in your implementation of head.

Parameters
array - Any JavaScript Array

Return Value
The first element of array. */

//ES5
function head(array) {
  return array[0]
}

//ES6
const firstElement = (array) => array[0];


/* 🚨 🚨 🚨  last(array)
Do not use slice(), splice(), pop(), or shift() in your implementation of last.

Parameters
array - Any JavaScript Array

Return Value
The last element of array.  */

// ES5
function last(array) {
  return array[array.length - 1]
}

// ES6
const lastElement = (array) => array[array.length - 1]

/* 🚨 🚨 🚨  tail(array)
Do not use slice(), splice(), pop(), or shift() in your implementation of tail.

Parameters
array - Any JavaScript Array

Return Value
A new array containing all elements of array after the first. */

function tail(array) {
  const newArray = []
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i])
  }
  return newArray;
}

// using array method slice
function tail2(array) {
  return array.slice(1)
}

/* 🚨🚨🚨 initial(array)
Do not use slice(), splice(), pop(), or shift() in your implementation of initial.

Parameters
array - Any JavaScript Array

Return Value
A new array containing all elements of array except the last. */

//without array methods slice, splice, pop, or shift
function initial(array) {
  const newArray = []
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i])
  }
  return newArray;
}

//using pop method
const newArray = (array) => array.pop()

/* 🚨🚨🚨 reverse(array)
Do not use Array.prototype.reverse() in your implementation of reverse.

Parameters
array - Any JavaScript Array

Return Value
A new array containing all elements of array in reverse order. */

function reverse(array) {
  const reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

/* 🚨🚨🚨 compact(array)

Parameters
array - Any JavaScript Array

Return Value
A new array containing all truthy elements of the given array. */

function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
