// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

let strs = ["flower","flow","flight"];


// var longestprefix = (strs) => {

//     let i = 1;
//     let strOutput = "";
//     let length = strs.length-1;

//     // function funCaller() {

//         let st = strs[0].split("", i).join("");
//         console.log(st,"st start element 1 character ");

//         if (length == 0) {
//             return st;
//         }

//         loop: for (let j = 1; j <= length; j++) {

//             console.log(j, "j loop no.");

//             let ch = strs[j].split("", i).join("");

//             console.log(`j of loop ${j} i  for words ${i} and st ${st} and ch ${ch} and length ${length} `);

//             if (ch === st) {
//                 strOutput = st;

//                 console.log(j," j in the if block")
//                 if (j == length) {
//                     i++;
//                     j=0;
//                      console.log(`j of loop ${j} i  for words ${i} and st ${st} and ch ${ch}  `);
//                     // funCaller();
//                 }
//             }

//             else if (ch !== st) {
//                 console.log(`j of loop ${j} i  for words ${i}  `);
//                 return strOutput;
//                 // break loop;
//             }

//         }
//     }

//     // return funCaller();
// // }


// console.log(longestprefix(strs), "outer output");
// console.log(`${strs} whole ,${strs[0]}element`)

// let strs = ["",""];

var longestprefix= (strs)=>{

    let strOut="";
    let frch="";
        let sortedStr = strs.sort((a,b)=>{
                let alphOrder= a.localeCompare(b);
                if(alphOrder!==0){
                    console.log("in alphaorder");
                    return alphOrder;
                }
                return a.length - b.length;
        });

        let firsElementAr = sortedStr[0].split("");
        let lasteleAr= sortedStr[strs.length-1].split("");

    loop:for(let [idx,ele] of firsElementAr.entries())
        {
            let lastele=lasteleAr[idx];
               console.log(lastele);
    
             if(ele===lastele) {
                console.log(ele,lastele,"in equal block ");
                frch = frch +ele;
                console.log(frch,"frch")
                strOut=strOut+lastele;
                console.log(strOut,"strout")
                if(idx === firsElementAr.length-1 || idx===lasteleAr.length-1 ){
                    console.log(idx,"idx",firsElementAr.length-1,"firs.len",lastele.length-1,"lastele.len")
                    console.log("in the break loop block")
                     break loop;
                }
            }
            else if(ele!==lastele){
                console.log("in the else if block")
                console.log(frch,"frch",strOut,"strOut",ele,"ele",lastele,"lastele");
                break loop;
            }
            
        };

        if(frch===strOut){
            return frch;
        }
    //    console.log(sortedStr,"sortedStr",frCh,lrCh)
}
console.log(longestprefix(strs));
