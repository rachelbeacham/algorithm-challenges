/* Define a function that returns an array containing all elements
of the given array except the last element. */

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
