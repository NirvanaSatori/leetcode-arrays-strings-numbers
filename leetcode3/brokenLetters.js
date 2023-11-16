/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {

    const textArray = text.split(" ")
    const distinctLetters = brokenLetters.split("")
    const eachLetter=textArray.filter(word =>{
        let foundWords = true
        for(let i = 0; i<distinctLetters.length; i++){
            if((word.includes(distinctLetters[i]))){
                foundWords = false
            }
        }
        return foundWords
    })
    return eachLetter.length
};
