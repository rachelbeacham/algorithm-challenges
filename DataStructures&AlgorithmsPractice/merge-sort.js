//BASIC IDEA OF MERGE SORT
// mergeSort(array) {
//   mergeSort(arrays left half)
//   mergeSort(arrays right half)
//   merge left and right half in sorted order
// }

function mergesort(array) {
  mergesortHelper(array, new Array(array.length), 0, array.length - 1);
}

function mergesortHelper(array, temp, leftStart, rightEnd) {
  if (leftStart >= rightEnd) return;
  var middle = Math.floor((leftStart + rightEnd) / 2);
  mergesortHelper(array, temp, leftStart, middle);
  mergesortHelper(array, temp, middle + 1, rightEnd);
  mergeHalves(array, temp, leftStart, rightEnd);
}

function mergeHalves(array, temp, leftStart, rightEnd) {
  var leftEnd = Math.floor((rightEnd + leftStart) / 2);
  var rightStart = leftEnd + 1;
  var size = rightEnd - leftStart + 1;

  var left = leftStart;
  var right = rightStart;
  var index = leftStart;

  while (left <= leftEnd && right <= rightEnd) {
    if (array[left] <= array[right]) {
      temp[index] = array[left];
      left++;
    } else {
      temp[index] = array[right];
      right++;
    }
    index++;
  }
  while (left <= leftEnd) {
    temp[index] = array[left];
    left++;
    index++;
  }
  while (right <= rightEnd) {
    temp[index] = array[right];
    right++;
    index++;
  }

  for (var i = leftStart; i <= rightEnd; i++) {
    array[i] = temp[i];
  }
}


const array = [2,14,9,11,20,4,10,3,6,17,5,16,1,15,19,18,13,12,7,8];
mergesort(array);
console.log(array);
