/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// const nums =[3,2,1,5,4]
// const k=1
//const  nums = [1,3]
// const k=3
const nums =[3,2,1,5,4] 
const k =2
var countKDifference = function(nums, k) {
    let pairs =[]
    for(let i = 0; i < nums.length; i ++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] - nums[j] === k || nums[i] - nums[j] === -k){
                pairs.push(nums[i], nums[j])
            }
        }
    }
    return (pairs.length)/2
};