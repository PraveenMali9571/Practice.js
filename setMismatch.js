// 645. Set Mismatch
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.
// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:
// Input: nums = [1,1]
// Output: [1,2]
// Constraints:
// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// let nums = [1,2,2,4];
let nums = [1, 4, 2, 4]; 
// let nums =[1,1]

var findErrorNums = function (nums) {
    let mis=0;
    let dup=0;
    
    let srNums = [... new Set(nums)].sort((a, b) => a - b);
    
    for (let i = 0; i <= nums.length; i++) {

        let eleid = nums.indexOf(nums[i]);
        // console.log(srNums[i],"eles value",i,"index value");
        if(i+1!==srNums[i] && mis<1){
            console.log(i+1,"missing value");
            // arr.unshift(i+1);
            mis=i+1;
        }
        if (i != eleid && dup<1) {
            console.log(nums[i],"duplicate");
            // arr.unshift(nums[i])
            dup=nums[i];
        }
    }


    return [dup,mis];

        
};
console.log(findErrorNums(nums));