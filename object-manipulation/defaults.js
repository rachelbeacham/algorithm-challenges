/*

Assigns properties of source object to the target object for all
properties that are not defined on target.

Parameters
target - Any JavaScript Object
source - Any JavaScript Object

Return Value
This function does not return anything, but it does modify target.

*/

function defaults(target, source) {
  for(let key in source) {
    if(target[key] === undefined) {
      target[key] = source[key]
    }
  }
}
