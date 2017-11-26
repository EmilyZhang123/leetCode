/* Created by emily on 2017/11/26. */
/**
 *  Note that the third maximum here means the third maximum distinct number.
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length==1) return nums[0];
    if(nums.length==2){
        return nums[0]>nums[1]?nums[0]:nums[1];
    }
    var firstMin=nums[0];
    var firstMax=nums[0];
    for (var i=0;i<nums.length;i++){
        firstMax=Math.max(firstMax,nums[i]);
        firstMin=Math.min(firstMin,nums[i]);
    }
    var secondMax=firstMin;
    for (i=0;i<nums.length;i++){
        if (nums[i]<firstMax){
            secondMax=Math.max(secondMax,nums[i])
        }
    }
    if(secondMax<firstMax){
        var thirdMax=firstMin;
        for (i=0;i<nums.length;i++){
            if (nums[i]<secondMax){
                thirdMax=Math.max(thirdMax,nums[i]);
            }
        }
        if(thirdMax<secondMax) return thirdMax;

    }
    return firstMax;
};