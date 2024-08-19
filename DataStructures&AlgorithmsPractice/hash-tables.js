// class Hashtable {
//   LinkedList[] data;
//   boolean put(string key, person value)
//   int hashcode = getHashCode(key)
//   int index - convertToIndex(hashcode)
//   list insert(key, value); <-- check for dupliates
// }


function lonelyinteger(a) {
  // Create a Map to store the count of occurrences of each integer
  const counter = new Map();

  // Iterate through the input array to populate the Map
  a.forEach((item) => {
    if (counter.has(item)) {
      counter.set(item, counter.get(item) + 1);
    } else {
      counter.set(item, 1);
    }
  });

  // Iterate through the keys of the Map to find the lonely integer
  for (let [key, value] of counter) {
    if (value === 1) {
      return key;
    }
  }
}

function icecreamParlor(m, arr) {
  // Write your code here
  let nums = new Map();
  console.log(`money ${m}`)
  console.log(`costs: ${arr}`);
  for (let i = 0; i < arr.length; i++) {
    const flavorCost = arr[i];
    console.log('current flavor cost: ', flavorCost);
    const remainingCost = m - flavorCost;
    console.log('neededCost: ', remainingCost)
    if (nums.has(remainingCost)) {
      return [nums.get(remainingCost) + 1, i + 1]
    }
    nums.set(flavorCost, i);
    console.log('nums: ', nums);
  }
  return [];
}

const iceCreamIncices = icecreamParlor(4, [2,2,4,3]);
console.log('ice cream indicies: ', iceCreamIncices);


function colorfulNumbers(number) {
  //Given a number, find out whether its colorful or not.
  //When in a given number, product of every digit of a sub - sequence are different.That number is called Colorful Number.See Example
  //Number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245.
  //this number is a colorful number, since product of every digit of a sub - sequence are different.
  //That is, 3 2 4 5(3 * 2) = 6(2 * 4) = 8(4 * 5) = 20, (3 * 2 * 4) = 24(2 * 4 * 5) = 40
  const recordedProducts = new Map();
  const numArr = number.toString().split('');
  const subArrayMaxLength = numArr.length - 1;
  for (let i = 0; i < numArr.length; i++) {
    let subArrayLength = 1;
    while (subArrayLength <= subArrayMaxLength && subArrayLength + i <= numArr.length) {
      let product = 1;
      let productString = '';
      let items = numArr.slice(i, i + subArrayLength);
      items.forEach((item) => {
        product = product * item;
        productString += item
      });
      if (recordedProducts.has(product)) return false;
      recordedProducts.set(product, productString);
      subArrayLength++;
    }
  }
  console.log(recordedProducts);
  return true;
}

const number = 3245;
const isColorful = colorfulNumbers(number);
console.log('is colorful: ', isColorful);

var lengthOfLongestSubstring = function (string) {
  const chars = new Map();
  let left = 0;
  let right = 0;

  let highest = 0;
  while (right < string.length) {
    const rightChar = string[right];
    chars.set(rightChar, (chars.get(rightChar) || 0) + 1);

    while (chars.get(rightChar) > 1) {
      const leftChar = string[left];
      chars.set(leftChar, chars.get(leftChar) - 1);
      left++;
    }

    highest = Math.max(highest, right - left + 1);
    right++;

  }
  return highest;
};

// determines if you can build a ransomNode with letters in magazine
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  const magLetterCounts = new Map();
  for (let m = 0; m < magazine.length; m++) {
    if (magLetterCounts.has(magazine[m])) {
      let curr = magLetterCounts.get(magazine[m]);
      magLetterCounts.set(magazine[m], curr + 1)
    } else {
      magLetterCounts.set(magazine[m], 1)
    }
  }

  for (let r = 0; r < ransomNote.length; r++) {
    if (!magLetterCounts.has(ransomNote[r]) || magLetterCounts.get(ransomNote[r]) <= 0) {
      return false;
    } else {
      let count = magLetterCounts.get(ransomNote[r]);
      magLetterCounts.set(ransomNote[r], count - 1);
    }
  }
  return true;

};

var twoSum = function (nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const neededNumber = target - current;
    if (numMap.has(neededNumber)) {
      return [numMap.get(neededNumber), i]
    } else {
      numMap.set(current, i);
    }
  }
  return [];
};


var majorityElement = function (nums) {
  //Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
  const frequency = nums.length / 3;
  const numCounts = new Map();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (numCounts.has(nums[i])) {
      let currCount = numCounts.get(nums[i]);
      currCount += 1;
      numCounts.set(nums[i], currCount);
      if (currCount > frequency && !result.includes(nums[i])) result.push(nums[i]);
    } else {
      numCounts.set(nums[i], 1);
      if (frequency < 1) result.push(nums[i]);
    }
  }
  return result;

};
