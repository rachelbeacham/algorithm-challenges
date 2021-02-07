/* Define a function that returns a new array containing the elements of the given
array before the last given amount of elements */

function dropRight(array, count) {
  const newArray = array.slice(0, -count);
  return newArray;
}
