/* Created by emily on 2017/11/29. */
/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var len=nums.length;
  var sum=len*(len+1)/2;
  var sunm2=0;
  for (var i in nums){
      sunm2+=nums[i];
  }
  return sum-sunm2
};