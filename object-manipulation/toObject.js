/* Define a function that returns an object with one property consisting of the
provided key value pair(an array) */

function toObject(keyValuePair) {
  const newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
