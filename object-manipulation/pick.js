/*

Parameters
source - Any JavaScript Object
keys - An array of JavaScript Strings

Define a function that returns a new Object containing all of the
properties of source listed in keys. If a key is listed in keys,
but is not defined in the source, then that property is not added
to the new Object.

*/

function pick(source, keys) {
  const newObj = {};
  for(let key in source) {
    if (keys.includes(key) && source[key] !== undefined) [
      newObj[key] = source[key]
    ]
  }
  return newObj;
}
