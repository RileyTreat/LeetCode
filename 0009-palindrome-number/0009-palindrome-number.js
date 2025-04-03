/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if ( x < 0 || ( x % 10 === 0 && x!== 0)) return false

    let reversed = 0;
    let current = x;

    while (x > 0){
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return current === reversed
};