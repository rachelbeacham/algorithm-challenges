/* Define a function that returns an array constinaing all the elements of a
given array in reverse order. */

function reverse(array) {
  const reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
