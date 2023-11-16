/**
 * @param {string[]} operations
 * @return {number}
 */

// const operations = ["--X","X++","X++"] 
// const operations = ["++X","++X","X++"]
const operations = ["X++","++X","--X","X--"]

var finalValueAfterOperations = function() {
    const reduceOperations = operations.reduce((total, operation)=>{
        let X = 0
        if(operation === "--X"|| operation === "X--"){
            X -=1
        }
        if(operation === "++X"||operation === "X++"){
            X +=1
        }
        return total += X
    },0)
    return reduceOperations
};