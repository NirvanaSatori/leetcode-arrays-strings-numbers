/**
 * @param {string} sentence
 * @return {boolean}
 */
// const sentence = "thequickbrownfoxjumpsoverthelazydog"
const sentence = "leetcode"
var checkIfPangram = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const sentenceArr = sentence.split("")
    const pangram = alphabet.filter(char=>!sentenceArr.includes(char))
    return pangram.length>=1?false:true
};