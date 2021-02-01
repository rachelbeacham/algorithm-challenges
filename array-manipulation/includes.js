/* Define a function that returns a boolean indicatingthe presence of the given
value in a given array.  Implement without using Array.prototype.includes */

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }
  return false;
}
