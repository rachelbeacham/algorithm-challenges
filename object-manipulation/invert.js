/*

Creates an object composed of the inverted keys and values of source.

Parameters
source - Any JavaScript Object

Return Value
A new Object containing all properties of source, but with the keys and
values inverted.

*/

function invert(source) {
  const newObj = {};
  for (let key in source) {
    newObj[source[key]] = key;
  }
  return newObj
}
