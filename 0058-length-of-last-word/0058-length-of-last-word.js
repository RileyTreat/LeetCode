/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0
    for(let i = s.length -1; i>= 0; i--){
        if(s[i] !== ' ') len++;
        if(s[i] === ' ' & len > 0) break;
    }
    return len
};