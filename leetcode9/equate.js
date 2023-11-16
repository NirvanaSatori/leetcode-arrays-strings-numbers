/**
 * @param {string[]} words
 * @return {boolean}
 */
// const words = ["ab","a"]
const words = ["abc","aabc","bc"]
var makeEqual = function() {
    const newWords = words.join("").split("")
    const aggregate = newWords.reduce((acc, curr)=>{
    return acc[curr] ? acc[curr]+=1 : acc[curr] = 1, acc
    }, {});
    for (const number of Object.values(aggregate)){
        if (number % words.length !== 0)
            return false
    };
    return true


};
console.log(makeEqual())