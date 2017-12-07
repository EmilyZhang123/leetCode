/* Created on 2017/12/7. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var n=nums.length;
    nums.sort(function (a,b) {return b-a});
    var maximum=nums[0]*nums[1]*nums[2];
    s=Math.max(maximum,nums[0]*nums[n-1]*nums[n-2]);
    return s
};
console.log(maximumProduct([-6,-4,2,3,-1,0]));