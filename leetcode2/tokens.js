/**
 * @param {string} s
 * @return {boolean}
 */

// const s= "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
// const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// const s ="hello world 5 x 5"
const s = "7 50 sf 51 sf 52 jk 60 op 60"
var areNumbersAscending = function() {
    let tokens = s.split(" ")
    const numInToken = tokens.map(token => {
      return (Number(token))
    })
    console.log(numInToken)
    const numsArray = tokens.filter(num=> {
      return Number(num) 
    })
    console.log(numsArray)
    let result = true
    for(let i=0; i<numsArray.length-1; i++){
        if((numsArray[i]-numsArray[i+1]) >= 0){
            result = false
        }
    }
    return result 
    // const checkAsc = numsArray.map((num,i) =>{
    //   console.log(num[i],num[1],num)
    //   result = true
    //   if((num[i] - num[i+1]) >=0 ){
    //    result = false
    //   }
    //   return result
    // })
    // console.log(checkAsc)
};
console.log(areNumbersAscending())