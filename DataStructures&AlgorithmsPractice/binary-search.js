//Recursive implementation
function binarySearchHelper(target, array, left, right) {
  if (right < left) return -1;
  let middle = Math.floor((left + right) / 2)
  if (array[middle] === target) return middle;
  if (target < array[middle]) {
    return binarySearchHelper(target, array, left, middle-1);
  } else {
    return binarySearchHelper(target, array, middle + 1, right);
  }
}

function binarySearchRecursive(target, array) {
  return binarySearchHelper(target, array, 0, array.length - 1)
}

//Iterative implementation
function binarySearchIterative(target, array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (array[middle] === target) return middle;
    if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

const array = [1, 8, 962, 2, 5,9,10, 12, -1, 169, 142]
const sortedArray = array.sort((a, b) => a - b);
//sortedArray = [-1, 1, 2, 5, 8, 9, 10, 12, 142, 169, 962]
binarySearchRecursive(8, sortedArray); //--> returns 4, index of 8
binarySearchRecursive(7, sortedArray); //--> returns -1, index of 7 does not exist


function findSquareRoot(target) {
  let left = 0;
  let right = target;

  while (left <= right) {
    let middle = Math.floor((left + right) /2)
    if (middle * middle === target) return middle;
    if (middle * middle > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1 //target doesnt have square root
}
