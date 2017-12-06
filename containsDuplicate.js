/* Created on 2017/12/6. */
/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var n=0;
    for (var i=0;i<nums.length;i++){
        for (var j=i+1;j<nums.length;j++){
            if (nums[i]==nums[j]){
              n++;
            }
        }
    }
    return n>0;
};