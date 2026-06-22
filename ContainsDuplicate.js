// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
let nums = [1,2,3,4,1]
// var containsDuplicate = function(nums) {
//     let midlength=(nums.length-1)/2;
//       for(let i=0,j=midlength;i<midlength,j<nums.length;i++,j++)
//       {
//             if(nums.indexOf(nums[i])!==i || nums.indexOf(nums[j])!==j){
//                 return true;
//             }
//       }
//       return false;
// };
// console.log(containsDuplicate(nums));


//  var containsDuplicate = function(nums) {
//     let newNums =[...new Set(nums)];
    
//     if(nums.length===newNums.length){
//         return false;
//     }
//     return true;

// }
// console.log(containsDuplicate(nums));

// var containsDuplicate = function(nums) {
//         let numSort = nums.sort();
//         for(let i =0;i<numSort.length;i++)
//         {
//             if(numSort[i]===numSort[i+1]){
//                 return true;
//             }
//         }
//         return false; 
// }
// console.log(containsDuplicate(nums));
