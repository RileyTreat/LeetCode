/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        let mid = parseInt((right + left) / 2);
    
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid-1;
        } else {
            left = mid+1
        }
    }
    return  left
};



// var searchInsert = function (nums, target) {
//     var len = nums.length;
//     for (var i = 0; i < len; i++) {
//         var num = nums[i];
//         if (target == num || target < num) return i;
//     }

//     return len;
// };