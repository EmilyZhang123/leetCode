/* Created on 2017/11/30. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var nums2=nums.slice(0).sort();
// console.log(nums2);

        var left=0;
        var right=nums.length-1;
        for (var i=0;i<nums.length;i++){
            if (nums[i]>nums[i+1]){
                left=i;
                break;
            }
        }
        for (i=nums.length-1;i>0;i--){
            if (nums[i]<nums[i-1]){
                right=i;
                break;
            }
        }
        return right-left+1;

};
console.log(findUnsortedSubarray([1,2,3,4]));