//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non - decreasing order.
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  const nums1Copy = [...nums1];

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
};

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
//The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
var removeElement = function (nums, val) {
  //keep copy of index.
  //loop through array.
  //if the item is not Val. update nums[index] to current item in the loop
  //return index
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++
    }
  }
  return index;
};

//==============================================================================================================

//Given an integer array nums sorted in non - decreasing order,
//remove the duplicates in -place such that each unique element appears only once.
//The relative order of the elements should be kept the same.
//Then return the number of unique elements in nums.
var removeDuplicatesI = function (nums) {
  //use set to keep track of items seen.
  //keep track of index
  //loop through array, if item has not been seen add it to the seen set
  //update nums at the current index and increase the index
  //return index
  let seen = new Set();
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      seen.add(nums[i]);
      nums[index] = nums[i];
      index++
    }
  }
  return index;
};

//==============================================================================================================


//Given an integer array nums sorted in non-decreasing order,
//remove some duplicates in-place such that each unique element appears at most twice.
//The relative order of the elements should be kept the same.
var removeDuplicatesII = function (nums) {
  //use map to keep track of count of each element.
  //if count is over 2 don't write it to the array at the current index
  const numCounts = new Map();
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!numCounts.has(nums[i])) {
      numCounts.set(nums[i], 1);
      nums[index] = nums[i];
      index++;
    } else {
      let currCount = numCounts.get(nums[i]);
      currCount += 1;
      if (currCount <= 2) {
        nums[index] = nums[i];
        index++;
      }
      numCounts.set(nums[i], currCount);
    }
  }
  return index;
};

//==============================================================================================================

//Given an integer array nums sorted in non-decreasing order,
//remove some duplicates in-place such that each unique element appears at most twice.
//The relative order of the elements should be kept the same.
//Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
var removeDuplicatesIII = function (nums) {
  let index = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++
      if (count <= 2) {
        nums[index] = nums[i];
        index++;
      }
    } else {
      nums[index] = nums[i];
      count = 1;
      index++;
    }
  }
  return index;
};

//==============================================================================================================

//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  const threshold = nums.length / 2;
  const sorted = nums.sort((a, b) => a - b);
  let count = 1;
  let highest = 1;
  let majority = null;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      count++;
      if (count > threshold && count > highest) {
        majority = sorted[i];
        highest = count;
      }
    } else {
      count = 1;
    }
  }
  return majority;
};

//==============================================================================================================

//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
//Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
//Output: [5, 6, 7, 1, 2, 3, 4]
var rotate = function (nums, k) {
  // return nums.push(...nums.splice(0, nums.length - k % nums.length))
  while (k > 0) {
    let last = nums.pop();
    nums.unshift(last);
    k--;
  }
};

//==============================================================================================================

/*You are given an array of integers. Write an algorithm that brings all nonzero elements to the left of the array,
and returns the number of nonzero elements. Example: given the array [ 1, 0, 2, 0, 0, 3, 4 ],
a possible answer is [ 4, 1, 3, 2, 0, 0, 0 ] with return value 4. */
function moveZeros(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let countZero = 0;
  while (p1 <= p2) {
    if (arr[p1] === 0) {
      let temp = arr[p2];
      arr[p2] = arr[p1];
      arr[p1] = temp;
      p2--;
    } else {
      countZero++
      p1++;
    }
  }
  return countZero;
}

//==============================================================================================================

//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.
//Input: prices = [7, 1, 5, 3, 6, 4]
//Output: 5
//Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
//Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
var maxProfit = function (prices) {
  //set buy price to first item and profit to 0.
  //loop through array starting at index 1
  //if item at index < current buy price, make this item the buy price
  //then determine the higher between the current profit and the current index - buy price
  let profit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    profit = Math.max(prices[i] - buy, profit);
  }
  return profit;
};

//==============================================================================================================

//Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
// Implement the MovingAverage class:
// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.

//   Example 1:
// Input
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// Output
// [null, 1.0, 5.5, 4.66667, 6.0]

// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

class MovingAverage {
  constructor(size) {
    //keep track of items in the window using an array
    this.data = [];
    //keep variable holding window max size
    this.size = size;
    //keep track of sum of window items
    this.sum = 0;
  }
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  //add the new value to data list
  this.data.push(val);
  if (this.data.length > this.size) {
    //after adding the new item, if the length of the list
    //is bigger than the window size, remove the first item
    let removedEl = this.data.shift();
    //subtract the first item from the sum
    this.sum -= removedEl;
  }
  //add the new value to the sum
  this.sum += val;
  //return sum / current size of data list to get avg
  return this.sum / this.data.length;
};

// There are n buildings in a line.You are given an integer array heights of size n that represents the heights of the buildings in the line.
// The ocean is to the right of the buildings.A building has an ocean view if the building can see the ocean without obstructions.Formally,
// a building has an ocean view if all the buildings to its right have a smaller height.
// Return a list of indices(0 - indexed) of buildings that have an ocean view, sorted in increasing order.

//   Example 1:
// Input: heights = [4, 2, 3, 1]
// Output: [0, 2, 3]
// Explanation: Building 1(0 - indexed) does not have an ocean view because building 2 is taller.

//   Example 2:
// Input: heights = [4, 3, 2, 1]
// Output: [0, 1, 2, 3]
// Explanation: All the buildings have an ocean view.

var findBuildings = function (heights) {
  //naive approach:
  const res = [];
  for (let i = 0; i < heights.length; i++) {
      let height = heights[i];
      let unobstructed = true;
      for (let j = heights.length -1; j > i; j--) {
          if (heights[j] >= height) {
              unobstructed = false;
          }
      }
      if (unobstructed) res.push(i);
  }
  // return res;

  //one pass: loop through array from right to left.  keep track of the max height
  //if current height > max - set max to current height, add the index to result array in the beginning (unshift)
  let max = 0;
  // const res = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      max = heights[i];
      //unshift is O(n)
      res.unshift(i);
    }
  }
  return res;
};
