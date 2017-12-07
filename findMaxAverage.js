/* Created on 2017/12/7. */
/**
 * Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
 * And you need to output the maximum average value.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    var n=nums.length-k+1;
    var average=sum(nums,k,0)/k;
    for (var j=1;j<n;j++){
        average=Math.max(average,sum(nums,k,j)/k)
    }
    return average
};
console.log(findMaxAverage([1,12,-5,-6,50,3,-2],4));
// findMaxAverage([1,12,-5,-6,50,3,-2],4)
function sum(nums,k,start) {
    var sum_sum=0;
    for (var i= start;i<start+k;i++){
        sum_sum+=nums[i];
    }
    return sum_sum;
}