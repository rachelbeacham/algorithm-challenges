/* Define a function that returns a new Array containing the last however many
elements of a given array */

function takeRight(array, count) {
  const newArray = array.slice(-count);
  return newArray;
}
