/* Created on 2017/11/30. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var temp=nums.slice(0).sort(function (a,b) {return a-b  });
    console.log(nums);
    console.log(temp);
    var left=0;
    var right=nums.length-1;
    while (left<nums.length && nums[left]==temp[left]){
        left++;
    }
    while (right>0 && nums[right]==temp[right]){
       right -- ;
    }
    console.log("left="+left+"///right="+right);
    return (right-left+1) >0?right-left+1:0;
};

console.log(findUnsortedSubarray([9,2,3,4,1,2,3,1,100,101,102,103]));