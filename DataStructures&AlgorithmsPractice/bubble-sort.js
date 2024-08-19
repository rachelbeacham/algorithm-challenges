function swapIndex(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function bubbleSort(array) {
 let sorted = false;
 while (!sorted) {
  sorted = true;
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] > array[i+1]) {
      swapIndex(array, i, i + 1);
      sorted = false;
    }
  }
 }
 return array;
}

const bubbleArray = [3, 10, 6, 7, 2, 5, 1, 4, 9, 8];
bubbleSort(bubbleArray);
console.log(bubbleArray);

function insertionSort1(n, arr) {
  // Write your code here
  let sorted = false;
  const unsortedVal = arr[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] > unsortedVal) {
      arr[i] = arr[i - 1];
    } else {
      arr[i] = unsortedVal;
      sorted = true;
    }
    console.log(arr.join(' '));
    if (sorted) return;
  }

}

const insertSortArr = [2, 4, 6, 8, 3]
insertionSort1(5, insertSortArr);


function insertionSort2(n, arr) { //[1, 4, 3, 5, 6, 2]
  // Write your code here
  for (let i = 1; i < n; i++) { //5
    let compareIndex = i - 1;
    let currentIndex = i;
    while (arr[compareIndex] > arr[currentIndex] && compareIndex >= 0) {
      const temp = arr[currentIndex]; 2
      arr[currentIndex] = arr[compareIndex]; 6
      arr[compareIndex] = temp; 2
      compareIndex -= 1;
      currentIndex -= 1;
    }
    console.log(arr.join(' '));
  }
  return arr;
}

const array=[3,10,6,7,2,5,1,4,9,8];
insertionSort2(10, array);
console.log(array);
