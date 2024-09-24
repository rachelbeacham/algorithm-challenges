/*

Code
check out..! simple one
check out..! simple one
Testcase
Testcase
Test Result
238. Product of Array Except Self
Solved
Medium
Topics
Companies
Hint
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

function productExceptSelf (nums) {
    const len = nums.length;
    const result = new Array(len).fill(1);
    //multiply the product of all values on the left of each value by all values on the right of each value
    let leftProduct = 1;
    for (let i = 0; i < len; i++) {
        //storing each values left product in the result array
        result[i] = leftProduct;
        //multiply the left product by current number - so we can store the current product for the next value
        leftProduct *= nums[i];
    }
    let rightProduct = 1;
    for (let i = len-1; i >= 0; i--) {
        //multiply the rightproduct by the item in the result array at the current index, which is this items left produt
        result[i] *= rightProduct;
        //multiply the right product by nums at this index to increment the product up to this point
        rightProduct *= nums[i];
    }
    return result;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));