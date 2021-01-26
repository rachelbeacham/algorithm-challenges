/* Define a function that returns an array of a given object's property keys */

function getKeys(object) {
  const keysArray = [];
  for (let key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
