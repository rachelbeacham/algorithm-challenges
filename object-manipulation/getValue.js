/* Define a function that returns the value in a given object at the given key  */

// ES5
function getValue(object, key) {
  return object[key];
}

// ES6
const value = (object, key) => object[key];
