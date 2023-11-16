/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// const k = 6
// const n = 34
const k = 10
const n = 10 
var sumBase = function(n, k) {
    const stringN = n.toString(k).split("")
    const sumOfDigits = stringN.reduce((acc, curr)=> {
        const num = Number(curr)
        return acc += num
    },0)
    return sumOfDigits
};