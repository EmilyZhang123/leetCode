/* Created by emily on 2017/11/22. */
/**
 * @param {number[]} nums
 * @return {number}
 */

var findShortestSubArray = function(nums) {
    if(nums.length==0 || !nums) return 0;
    var m={};
    var maxTimes=0;
    for(var i=0;i<nums.length;i++){
        var item=m[nums[i]];
        if (item){
          item.times ++;
          item.right=i;
          maxTimes=Math.max(maxTimes,item.times)
        }else {
          m[nums[i]]={
              left:i,
              right:i,
              times:1
          }
        }
        maxTimes=Math.max(maxTimes,1);
    }
    var min = 2147483647;
    for (var j in m){
        var item=m[j];
        if (maxTimes==item.times){
          min=Math.min(min,item.right-item.left+1);
        }
    }
    return min
};
