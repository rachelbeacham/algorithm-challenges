/* Define a function that returns an array of a given objects property values  */

function getValues(object) {
  const valuesArray = [];
  for (const key in object) {
    valuesArray.push(object[key]);
  }
  return valuesArray;
}
