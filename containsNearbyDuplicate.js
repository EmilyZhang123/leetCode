/* Created on 2017/11/29. */
/**
 * Given an array of integers and an integer k,
 * find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if (nums.length<2||!nums) return false;
    var c=0;
    for (var i=0;i<nums.length;i++){
        for (var j=i+1;j<nums.length;j++){
            if (nums[i]==nums[j] && j-i<=k) c++;
        }
    }
    if (c) return true;
    return false;
};
console.log(containsNearbyDuplicate([99,99],2));