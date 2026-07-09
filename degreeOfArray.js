// 697. Degree of an Array
// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
// Example 1:
// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:
// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
// Constraints:
// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// let nums = [1, 2, 2, 3, 1];
// let nums= [2,1,1,3,2]
// let nums=[1,1]
let nums = [49999, 49999, 49999];
// let nums = [1, 2, 2, 3, 1, 4, 2];
    var findShortestSubArray = function (nums) {
        let cObj = {};
        for (let i = 0; i < nums.length; i++) {
            cObj[nums[i]] = (cObj[nums[i]] || 0) + 1;

        }
        let hig = Object.entries(cObj).sort((a, b) => b[1] - a[1]);

        if (hig.length == 1) return nums.length;

        let st = nums.indexOf(Number(hig[0][0]));
        let en = nums.lastIndexOf(Number(hig[0][0]));

        let fLen = en - st + 1;
        let sLen = nums.lastIndexOf(Number(hig[1][0])) - nums.indexOf(Number(hig[1][0])) + 1;

        if (hig[0][1] === hig[1][1]) {

            if (fLen > sLen) {
                return sLen;

            }

            return fLen
        } else {

            return fLen;
        }

    };
console.log(findShortestSubArray(nums))