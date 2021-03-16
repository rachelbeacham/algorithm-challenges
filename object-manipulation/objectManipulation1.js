/* 🚨🚨🚨 getValue(object, key)

Parameters
object - Any JavaScript Object
key - A JavaScript String

Return Value
The value in object found at the key property. */

// ES5
function getValue(object, key) {
  return object[key];
}

// ES6
const value = (object, key) => object[key];
