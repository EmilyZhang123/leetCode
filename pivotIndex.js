/* Created by emily on 2017/11/21. */
/**
 * Given an array of integers nums, write a method that returns the "pivot" index of this array.

 We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

 If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if(nums.length<1) return -1;
  var s=test=0;
  for (var i=0;i<nums.length;i++) s=s+nums[i];

  for (var j=0;j<nums.length;j++){
      s=s-nums[j];
      if (s==test) return j;
      test=test+nums[j];
  }
  return -1;
};

pivotIndex([1,7,3,6,5,6]);