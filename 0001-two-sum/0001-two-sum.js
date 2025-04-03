/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let com = target - nums[i];

        if(com in map){
            return [map[com], i]
        }
        map[nums[i]] = i
    }
};