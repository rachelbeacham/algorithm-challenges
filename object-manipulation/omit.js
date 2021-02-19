/*

Parameters
source - Any JavaScript Object
keys - An array of JavaScript Strings

Return Value
A new Object containing all of the properties of
source that are not listed in keys. If a key is
listed in keys, then it should not be included in
the new Object.

*/

function omit(source, keys) {
  const newObj = {};
  for(let key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key]
    }
  }
  return newObj;
}
