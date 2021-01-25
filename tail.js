/* Define a function that returns an array containing all elements
of the given array after the first. */

//without array methods slice, splice, pop, or shift
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
