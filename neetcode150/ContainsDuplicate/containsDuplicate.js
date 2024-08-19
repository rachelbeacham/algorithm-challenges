// Duplicate Integer - Easy
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

//SOLUTION IDEA:
//use set to keep track of seen items
//loop through list
//check if current num is in seen set, return true if so
//otherwise add the num to the set
//otherwise add the num to the set
//if here, whole loop goes through without reaching duplicate, return false

//TIME COMPLEXITY
// initializing the set takes constant O(1) time
// looping through nums takes O(n) time
// checking number membership in the set takes O(1) time, due to the underlying implementation of a set being a hash table.lookups take O(1)
// OVERALL TIME COMPLEXITY IS O(n)

//SPACE COMPLEXITY
// space is domiated by the space required to store numbers in seen set.
// worst case, no duplicates exist and the seen set is the same size of the provided list
// so OVERALL SPACE COMPLEXITY IS O(n)

function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

console.log(containsDuplicate([1,2,3,3]));
