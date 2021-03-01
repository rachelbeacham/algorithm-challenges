/* head(array)
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
