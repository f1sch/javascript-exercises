/*
// longer code, faster? execution
const reverseString = function(oldWord) {
    let newWord = '';
    for (let i = oldWord.length-1; i >= 0; i--) newWord += oldWord[i];
    return newWord;
};
*/
const reverseString = function(oldWord) {
    return oldWord.split("").reverse().join("");
}

// Do not edit below this line
module.exports = reverseString;
