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


/*🚨🚨🚨 drop(array, count)

Parameters
array - Any JavaScript Array
count - A positive integer Number of elements to "drop" from the beginning of array

Return Value
A new Array containing the elements of array after the first count elements.

Do not mutate the input array! */

function drop(array, count) {
  const newArray = array.slice(count);
  return newArray;
}
