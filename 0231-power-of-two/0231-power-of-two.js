/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};



// var isPowerOfTwo = function(n) {
//     if (n<= 0) return false
//     let log2 = Math.log(n)/ Math.log(2);
//     return Number.isInteger(log2)
// };
