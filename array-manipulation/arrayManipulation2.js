/*🚨🚨🚨 take(array, count)


Parameters
array - Any JavaScript Array
count - A positive integer Number of elements to "take" from the beginning of array

Return Value
A new Array containing the first count elements of array.

Do not mutate the input array!  */

function take(array, count) {
  const newArray = array.slice(0, count)
  return newArray;
}
