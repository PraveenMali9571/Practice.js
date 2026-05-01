// 228. Summary Ranges
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b
// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
/**
 * @param {number[]} nums
 * @return {string[]}
 */
let nums = [0,2,3,4,6,8,9];
var summaryRanges = function (nums) {
    let stArr = []; let st=0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === nums[i] + 1) {
            // console.log(nums[i + 1], "next val", nums[i] + 1, "present inc");
            // console.log(count, "count in if");
            if(count==0){
                st = nums[i];
            }
            count++;
            // console.log(st, "st in if");
        }
        else {
            if (count >= 1) {
                stArr.push(`${st}=>${nums[i]}`);
                // console.log(`${st}=>${nums[i]}`);
                count = 0;
            } else {
                stArr.push(`${nums[i]}`);
                // console.log(nums[i], "present val");
            }
        }
        // stArr.push(`${i}=>${i+1}`);
    }

    // console.log(stArr);
    return stArr;
};
console.log(summaryRanges(nums))