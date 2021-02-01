/* Define a function that returns a new Array containing the first given number
of elements from the beginning of the given array. */

function take(array, count) {
  const newArray = array.slice(0, count)
  return newArray;
}
