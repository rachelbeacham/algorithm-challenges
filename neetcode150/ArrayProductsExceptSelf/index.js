/*
Products of Array Discluding Self
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20
*/

function productsExceptSelf1 (nums) {
    //O(n2) solution
    const result = [];
    // loop through each index
    for (let i = 0; i < nums.length; i++) {
        let total = 1;
        // loop thorugh each index again to get product without current index
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                total *= nums[j];
            }
        }
        result.push(total);
        //reset total for next iteration
        total = 1;
    }
    return result;
}

function productsExceptSelf2 (nums) {
    //O(n) solution but uses division
    let product = 1;
    for (let num of nums) { //O(n)
        product *= num;
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) { //o(n)
        result.push(product / nums[i]);
    }
    return result;
}

console.log(productsExceptSelf1([1,2,4,6]));
console.log(productsExceptSelf2([1,2,4,6]));