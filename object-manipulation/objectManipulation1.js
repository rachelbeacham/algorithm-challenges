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


/* 🚨🚨🚨  setValue(object, key, value)

Parameters
object - Any JavaScript Object
key - A JavaScript String
value - Any JavaScript value

Return Value
This function does not return anything (undefined) */

function setValue(object, key, value) {
  object[key] = value;
}


/* 🚨🚨🚨 getKeys(object)
Do not use Object.keys in your implementation of getKeys().

Parameters
object - Any JavaScript Object

Return Value
An Array of the object's property keys. */

function getKeys(object) {
  const keysArray = [];
  for (let key in object) {
    keysArray.push(key)
  }
  return keysArray;
}
