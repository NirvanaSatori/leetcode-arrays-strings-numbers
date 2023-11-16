/**
 * @param {string[]} sentences
 * @return {number}
 */

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// const sentences = ["please wait", "continue to fight", "continue to win"]

const num = [4,5,6,7]

var mostWordsFound = function() {
    const longestSentence = sentences
            .map(string => {
                const sentence = string.split(" ")
                return sentence.length})
            .reduce((largestInteger, integer) => {
                return(largestInteger > integer ? largestInteger : integer) },0)
            
    return longestSentence
};

console.log(mostWordsFound())