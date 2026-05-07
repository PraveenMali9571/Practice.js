// 414. Third Maximum Number
// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];
// let nums= [3,3,4,3,4,3,0,3,3]
var thirdMax = function (nums) {
  let Snums = [...new Set(nums)].sort((a ,b)=> a-b);
  
  console.log(Snums, "Snums arr", Snums.length, "Snulength", nums.length, "numlength");
  if (!(Snums.length >= 3)) {

    return Snums[Snums.length - 1]
  }

  return Snums[Snums.length - 3];


};
console.log(thirdMax(nums))
