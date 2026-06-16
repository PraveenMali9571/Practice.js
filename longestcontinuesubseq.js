// 674. Longest Continuous Increasing Subsequence
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
// Example 1:
// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.
// Example 2:
// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.
//  /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// let nums = [1, 3, 5, 4, 7];
// let nums = [2,2,2,2,2]
// var findLengthOfLCIS = function (nums) {
//     let st =0;
//     let arN=[];
//     for(let i=0;i<=nums.length;i++){
//         if(nums[i]>=nums[i+1]||nums.length==i){
//             let arr= nums.slice(st,i+1);

//             console.log(arr,"array in the if block",arr.length,"length",st,"st",i+1,"i+1");
//             arN.push(arr.length);
//             st =i+1;
//         }
//         // console.log(st,"st",i,"i");
//     }
//     console.log(arN);
//     return Math.max(...arN);


// };
// console.log(findLengthOfLCIS(nums))
// let nums = [2,2,2,2,2]
let nums = [1, 3, 5, 4, 7];
var findLengthOfLCIS = function (nums) {
    let st =0;
    let arN=0;

    for(let i=0;i<=nums.length;i++){
        if(nums[i]>=nums[i+1]||nums.length==i){
            let arr= nums.slice(st,i+1);

            console.log(arr,"array in the if block",arr.length,"length",st,"st",i+1,"i+1");

            if(arN<arr.length){
                console.log(arN,"arn",arr.length,"arrlenght")
                arN=arr.length;
            }
            // arN.push(arr.length);
            st =i+1;
        }
        // console.log(st,"st",i,"i");
    }
    console.log(arN);
    // return Math.max(...arN);
    return arN;


};
console.log(findLengthOfLCIS(nums))