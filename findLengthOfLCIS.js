/* Created by emily on 2017/11/23. */
/**
 * Given an unsorted array of integers, find the length of longest continuous increasing subsequence.
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length==0||!nums) return 0;
    var min=nums[0];
    var max=len=1;
    for (var i=1;i<nums.length;i++){
        if (nums[i]>min){
            len++;
            max=Math.max(len,max)
        }else {
            len=1;
        }
        min=nums[i];
    }
 return max;
};
console.log(findLengthOfLCIS());