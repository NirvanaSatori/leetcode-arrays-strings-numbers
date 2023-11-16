/**
 * @param {string} num
 * @return {string}
 */
const num = "52"
// const num = "4206"
// const num = "35427"
var largestOddNumber = function() {
    for(let i = num.length -1; i>=0; i--){
        if(+num[i]%2){
            return num.slice(0, i+1)
        }
    }
    return ""
};