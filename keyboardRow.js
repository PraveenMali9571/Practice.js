// 500. Keyboard Row

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".
// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Explanation:
// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.
// Example 2:
// Input: words = ["omk"]
// Output: []
// Example 3:
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// let words = ["Hello","Alaska","Dad","Peace"];
// let words =["omk"]
let  words = ["adsdf","sfd"];
// let words =["a","d"]

var findWords = function(words) {
    let ansArr=[];
    let fRow ="qwertyuiop".split(""),sRow="asdfghjkl".split(""),tRow="zxcvbnm".split("");
    
    for(let i=0;i<words.length;i++)
    {
        let count=0;
        let sltr= words[i].toLowerCase().split("");
        let slAr= [...new Set(sltr)];
        let Ar;
       
        if(fRow.includes(slAr[0])){
            Ar=fRow;
            // count++;
        }
         else if(sRow.includes(slAr[0])){
            Ar=sRow;   
           
            // count++;   
        }
        else if(tRow.includes(slAr[0])){
            Ar=tRow;
            // count++;
        }
      
       
      loop2:for(let j=0;j<slAr.length;j++){
            if(Ar.includes(slAr[j])){
                count++;
               
            }
            if(slAr.length===count){
                ansArr.push(words[i]);
                // break loop2;
            }
        }
    }
    return ansArr;


};
console.log(findWords(words))