/* Define a function that removes all falsey values from an array (false, undefined
  null, 0, -0, NaN, "") */

function truthy(array) {
  const truthyArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArray.push(array[i])
    }
  }
  return truthyArray;
}
