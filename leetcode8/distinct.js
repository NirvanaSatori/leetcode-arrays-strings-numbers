/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
// const arr =["a","b","a"]
// const k =3
// const arr =["aaa","aa","a"]
// const k =1
const arr =["d","b","c","b","c","a"]
const k =2
var kthDistinct = function() {
    let nonDistinctString = []
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                nonDistinctString.push(arr[i])
            }
        }
    }
    const distinctStrings = arr.filter(string => !nonDistinctString.includes(string))
    return distinctStrings[k-1] ? distinctStrings[k-1]:""
};