// 594. Longest Harmonious Subsequence
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation:
// The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:
// Input: nums = [1,2,3,4]
// Output: 2
// Explanation:
// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.
// Example 3:
// Input: nums = [1,1,1,1]
// Output: 0
// Explanation:
// No harmonic subsequence exists.
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
let nums = [1, 3, 2, 2, 5, 2, 3, 7];
// let nums = [1,2,3,4];
// let nums = [1,1,1,1]
var findLHS = function (nums) {

    let count = nums.reduce((acc, ele, idx) => {
                acc[ele]=(acc[ele]||0)+1;
                return acc;
    }, {});

    // let srNum = [...new Set(nums)].sort((a, b) => a - b);
    let srNum = nums.sort((a, b) => a - b);
    // console.log(srNum,"srNum",count,"count");
    let acc=0;

    for(let i=0;i<srNum.length;i++){
        let cnSm=0;
        let ele = srNum[i];
        let nele = srNum[i + 1] ?? 0;
        // console.log(cnSm,"cnSm",nele - ele ,"ele-nele");
        
        if (nele - ele === 1) {

            cnSm = count[ele]+count[nele];

            // console.log(cnSm,"cnsm")
        }
        if(acc<cnSm){
            acc = cnSm;
            // console.log(acc,"acc in reduce if ",cnSm,"cnSm");
        
        }
    }
    return acc;
    console.log(acc,"harNum")

};

console.log(findLHS(nums))