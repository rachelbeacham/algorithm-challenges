/*

11. Container With Most Water
Solved
Medium

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
SEE IMAGE FILE
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

function maxArea (heights) {
    //set pointers for beginning and end of array
    let left = 0;
    let right = heights.length - 1;
    //set baseline maxArea
    let maxArea = 0;
    
    //loop while pointers have not met
    while (left < right) {
        //get the width between these pointers
        let width = right - left;
        //get the minmum height of the two items
        let min = Math.min(heights[left], heights[right]);
        //get the max between the current max and this area
        maxArea = Math.max(maxArea, width * min);
        if (heights[left] < heights[right]) {
            //increment the left pointer if its height is smaller than the right
            left++;
        } else {
            //decrement the right pointer if its height is smaller than the left
            right--;
        }
    }
    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));