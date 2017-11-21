/* Created by emily on 2017/11/21. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(nums==[]) return 0;
    var len=count=0;
    for (i=0;i<nums.length;i++){
        if(nums[i]==1){
            len=len+1;
            count=Math.max(count,len)
        }else {
            len=0
        }
    }
    return count;
};