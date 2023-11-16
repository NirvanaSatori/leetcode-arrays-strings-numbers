/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

s =  "leetcode"
k = 2
var getLucky = function() {
    let i = 1
    const sArray = s.split("")
    const convertArray = sArray.map(letter =>{
        return (parseInt(letter, 36) - 9)
    })
    let convert = convertArray.join("").split("")
    let transform = convert.reduce((total, int)=>total+=Number(int), 0)
        while(i !== k){
            let transformN = []
            transformN = [...transformN, transform]
            convert = transformN.join("").split("")
            transform = convert.reduce((total, int)=>total+=Number(int), 0)  
             i++
        }
       return transform 
    
};
console.log(getLucky())