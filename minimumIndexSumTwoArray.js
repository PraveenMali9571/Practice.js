// 599. Minimum Index Sum of Two Lists
// Given two arrays of strings list1 and list2, find the common strings with the least index sum.
// A common string is a string that appeared in both list1 and list2.
// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
// Return all the common strings with the least index sum. Return the answer in any order.
// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
// Example 3:
// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
let list1 = ["happy", "sad", "good", "her"], list2 = ["sad", "happy", "good"];
// let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

// var findRestaurant = function (list1, list2) {
//     let len = list1.length;
//     let eleN = "";
//     let eqEle = "";
//     let eqNum = list1.length;
//     let searArr = list1;
//     let eleArr = list2;
//     let outArr = [];
//     let count = list1.length;
//     let countN;
//     if (len < list2.length) {
//         len = list2.length;
//         searArr = list2;
//         eleArr = list1;
//     }

//     for (let i = 0; i < len; i++) {

//         let idx = searArr.indexOf(eleArr[i]);
//         // console.log(idx, "idx", i, "i ")
//         if (!(idx < 0)) {
//             let sIdx = idx + i;
//             console.log(sIdx, "sIdx");
//             if (sIdx < count) {
//                 console.log(count, "count");

//                 count = sIdx;
//                 eleN = eleArr[i];

//             }
//             else if(sIdx===count){
//                     countN=sIdx;
//                     eqEle=eleArr[i];
//                     console.log(countN,"countN",sIdx,"sIdx",eqEle,"eqEle",eleN,"elearr");
//               }


//         }
//         if ((len - 1 == i)) {
//             console.log(eleN,"eleN")
//             outArr.push(eleN);

//             if(countN==count && eqEle!==eleN){
//                 console.log(countN,"countN",eqEle,"eqEle",eleN,"elearr","in if block");
//                 outArr.push(eqEle);
//             }


//         }


//     }
// return outArr;

// };

// var findRestaurant = function(list1, list2) {
//     let map = new Map();

//     for(let i=0; i < list1.length; i++){
//         map.set(list1[i], i);
//     }

//     let minsum = Infinity;
//     let res = [];

//     for(let i=0; i < list2.length; i++){
//         if(map.has(list2[i])){
//             let sum = map.get(list2[i]) + i;
//             if(sum < minsum){
//                 minsum = sum;
//                 res = [list2[i]];
//             }else if(sum === minsum){
//                 res.push(list2[i]);
//             }
//         }
//     }

//     return res;

// };

// // console.log(findRestaurant(list1, list2));
// let list1= ["Shogun","Tapioca Express","Burger King","KFC"]
// let list2=["KFC","Burger King","Tapioca Express","Shogun"]

var findRestaurant = function (list1, list2) {

    let obj = {};
    let outArr = [];

    let len = list1.length;

    if (len < list2.length) {
        let temp;
        len = list2.length;
        temp =list1;
        list1= list2;
        list2=temp;

    }
    for (let i = 0; i < len; i++) {
        let idx = list1.indexOf(list2[i]);
        if (!(idx < 0)) {
            let sIdx = idx + i;
            obj[list2[i]] = sIdx;
        }
    }
    
    let valArr= Math.min(...Object.values(obj));
    for(let [key,val] of Object.entries(obj)){
        if(valArr===val){
            outArr.push(key)
        }
    }
    return outArr;
}
console.log(findRestaurant(list1, list2));