// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

let flowerbed = [0, 0, 1, 0, 0], n = 1;

var canPlaceFlowers = function (flowerbed, n) {

    let i = 0;

    while (i < flowerbed.length) {

        let pre = flowerbed[i - 1] ?? 0;
        let nex = flowerbed[i + 1] ?? 0;

         if (   flowerbed[i] !== 1
                &&
                pre !== 1
                &&
                nex !== 1
                &&
                n!==0) {

                            // console.log(n,"n",flowerbed[i],"!==1&&",flowerbed[i-1],"!==1&&",flowerbed[i+1],"!==1",i,"iteration");
                            flowerbed[i] = 1;
                            console.log(flowerbed,"array");
                    
                            n -= 1;
        }

        i++;
    }

    if (n == 0) 
    {
        // console.log(n,"n last block");
            return true;
    }

    return false;

};
console.log(canPlaceFlowers(flowerbed, n));