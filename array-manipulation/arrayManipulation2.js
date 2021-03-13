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

/*🚨🚨🚨 includes(array, value)

Parameters
array - Any JavaScript Array
value - The value to search for in array

Return Value
A Boolean indicating the presence of value at any index of array.

Do not use Array.prototype.includes in your implementation */

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }
  return false;
}

/* 🚨🚨🚨  takeRight(array, count)

Parameters
array - Any JavaScript Array
count - A positive integer Number of elements to "take" from the end of array.

Return Value
A new Array containing the last count elements of array.

Do not mutate the input array!  */

function takeRight(array, count) {
  const newArray = array.slice(-count);
  return newArray;
}
