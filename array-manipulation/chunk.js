/* Define a funcion that returns a new Array of Arrays.  Each sub-array has a length
equal to the given number remainder elements are gathered into a final sub-array */

function chunk(array, size) {
  const newArray = [];
  for(let i = 0; i < array.length; i = i + size) {
    const section = array.slice(i, i + size);
    newArray.push(section);
  }
  return newArray;
}
