// 628. Maximum Product of Three Numbers
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.



// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
let
    nums = [1, 2, 3]
// // nums = [-1, -2 ];

// var maximumProduct = function (nums) {
//     let uniArr = [... new Set(nums)].sort((a, b) => a - b);
//     // console.log(uniArr.length-4)
//     const pos = nums.every(n => n > 0);
//     const neg = nums.every(n => n < 0);
//     let len = uniArr.length;
//     let res=1;
//     if (len <= 3){

//     }
//     let start, end;
//     if (!(pos || neg) || pos) {
//         start = len - 4;
//         end = len;


//     }
//     else if (neg) {
//         start = 0;
//         end = 3;
//     }
//     console.log(start,"start",end,"end")

//     for (let i = start; i < end; i++) {
//          res =res* uniArr[i];
//         console.log(i,"i",res,"res",uniArr[i]);
//     }
//     return res;

// };

var maximumProduct = function (nums) {
    let arr = nums.sort((a, b) => b - a);
    let l = nums.length;
    let val1 = nums[0] * nums[1] * nums[2];
    let val2 = nums[0] * num[l - 1] * nums[l - 2];
    return val1 > val2 ? val1 : val2;
}
console.log(maximumProduct(nums))