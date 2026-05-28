// 643. Maximum Average Subarray I
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
// Example 1:
// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:
// Input: nums = [5], k = 1
// Output: 5.00000
// Constraints:
// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// let nums = [1, 12, -5, -6, 50, 3], k = 4;
// let nums = [5], k = 1;
// let nums = [4, 2, 1, 3, 3], k = 2;
let nums = [9, 7, 3, 5, 6, 2, 0, 8, 1, 9], k = 6;
// var findMaxAverage = function (nums, k) {
//     // let AverAr = [];
//     let maxEle = 0;

//     for (let i = 0; i + k - 1 < nums.length; i++) {
//         let set = 0;
//         for (let j = 0; j < k; j++) {
//             set += nums[i + j];

//         }
//         // console.log(set, "eleAv");
//         let eleAv = set / k;
//         if (eleAv > maxEle) {
//             maxEle = eleAv;
//         }
//         // AverAr.push(eleAv);


//     }
//     // console.log(AverAr, "arr")
//     // return Math.max(...AverAr);
//     return maxEle;


// };
// console.log(findMaxAverage(nums, k))


var findMaxAverage = function (nums, k) {
    // let AverAr = [];
    let setSm = 0;
    for (let j = 0; j < k; j++) {

        setSm += nums[j];
    }
    let maxEle = setSm / k;
    if (k == nums.length) {
        return setSm / k;
    }
    console.log(setSm, "setsum");
    let setSb = 0;
    let setAd = 0;
    for (let i = 1; i + k - 1 < nums.length; i++) {

        setSb = setSm - nums[i - 1];
        console.log(setSm, "-", nums[i - 1], setSm);
        setAd = setSb + nums[i + k - 1];
        console.log(setSb, "+", nums[i + k - 1]);
        setSm = setAd;


        console.log(setSb, "setSubt", setAd, "SetAdd", "eleAv");
        let eleAv = setAd / k;
        console.log(eleAv, "eleAv")
        if (eleAv > maxEle) {
            maxEle = eleAv;
        }
        // AverAr.push(eleAv);
        console.log(maxEle, "maxEle")

    }
    // console.log(AverAr, "arr")
    // return Math.max(...AverAr);
    return maxEle;


};
console.log(findMaxAverage(nums, k))