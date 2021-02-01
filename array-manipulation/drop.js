/* Define a function that returns a new array containing the elements of a
given array after the first given count of elements. */

function drop(array, count) {
  const newArray = array.slice(count);
  return newArray;
}
