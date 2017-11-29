/* Created by emily on 2017/11/29. */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var c=0;
    for (var i=0;i<nums.length;i++){
        if (nums[i]==0){
            nums.splice(i,1);
            i--;
            c++;
        }
    }
    for (i=0;i<c;i++){
        nums.push(0);
    }
    return nums
};
console.log(moveZeroes([0,0,1]));