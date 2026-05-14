// 496. Next Greater Element I
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// var nextGreaterElement = function(nums1, nums2) {
//     let ans=[];

//     for(let i=0;i<nums1.length;i++)
//     {
//         let maxIdx= nums2.indexOf(Math.max(...nums2));
//         console.log(maxIdx,"maxidx")
//         let idx= nums2.indexOf(nums1[i]);
//         console.log(idx,'index ');
//         if(nums2[idx]<nums2[idx+1]){
//             console.log(idx,"idx in if block");
//                 ans.push(nums2[idx+1]);
//         }
//         else if(maxIdx>idx){
//             ans.push(nums2[maxIdx]);

//         }else{
//             console.log("else block");
//             ans.push(-1);
//         }
//     }
//     return ans;

// };
//  console.log(nextGreaterElement(nums1, nums2))

// let nums1 = [4,1,2], nums2 = [1,3,4,2];
// let nums1 = [2, 4], nums2 = [1, 2, 3, 4];
let nums1 =
[1,3,5,2,4],
nums2 =
[6,5,4,3,2,1,7];

var nextGreaterElement = function (nums1, nums2) {
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        let idx = nums2.indexOf(nums1[i]);
        // console.log(idx, 'index ');
       loop2: for (let j = idx + 1; j <= nums2.length; j++) {

            // console.log(j, "j or idx+1", nums2.length, "num2Length");

            if (nums2[idx] < nums2[j]) {
                // console.log(idx, "idx in if block",nums2[idx],"nums2","<", nums2[j],"nums2[j]");
                ans.push(nums2[j]);
                break loop2;
            }
            else if (j === nums2.length) {
                ans.push(-1);
            }
        }

    }
    return ans;


};
console.log(nextGreaterElement(nums1, nums2))


