/* Created on 29/12/2017. */
/**
 * Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let c=0;
    for(let i=1;i<nums.length&&c<=1;i++){
        if(nums[i-1]>nums[i]){
            c++;
            if(i-2<0||nums[i-2]<=nums[i])
            {nums[i-1]=nums[i];}
            else {nums[i] = nums[i-1]}
        }
    }
    return c<=1
};