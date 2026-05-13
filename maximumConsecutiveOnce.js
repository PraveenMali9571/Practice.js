// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2
/**
* @param {number[]} nums
* @return {number}
*/
let nums = [1,0,1,1,0,1];
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let len= nums.length+1;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 1) {
            count = count + nums[i];
        } else {
            nums[i]=count;
            count = 0;
        }

    }
    return Math.max(...nums);
};
console.log(findMaxConsecutiveOnes(nums))