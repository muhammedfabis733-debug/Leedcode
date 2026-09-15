/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let reduce = init;
    for (let i = 0; i< nums.length; i++){
        reduce = fn(reduce, nums[i]);
    }
    return reduce;
};