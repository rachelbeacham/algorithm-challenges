/** Top K Elements in List
Medium 
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2:
Input: nums = [7,7], k = 1
Output: [7]

Constraints:
1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.
*/



function topK(nums, k) {
    //use map to get the counts for each unique number
    const counts = {};
    for (const num of nums) {
        counts[num] = counts[num] + 1 || 1;
    }

    //create another array the size of input nums + 1 and fill with null values
    const sorted = Array(nums.length + 1).fill(null);
    //use the count as the index in this array.  and at this index store a list of values that have this count
    for (const key in counts) {
        const index = counts[key];
        if (!sorted[index]) {
            sorted[index] = [];
        }
        sorted[index].push(key);
    }
    const result = [];
    //loop through sorted array backwards to get the top K pushed into result array
    for (let i = sorted.length; i >= 0; i--) {
        if (result.length === k) break;
        if (!sorted[i]) continue;

        for (const item of sorted[i]) {
            if (result.length < k) result.push(item);
        }
    }
    return result;
}

console.log(topK([1,2,2,3,3,3], 2))