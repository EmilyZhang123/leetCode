// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=0; i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                nums.splice(j,1);
                j--;
            }
        }
    }
    return nums.length
};

var removeDuplicates1 = function(nums) {
    var j=0;
    for(var i=0; i<nums.length;i++){
            if(nums[i]!=nums[j]){
                nums[j]=nums[i];
                j++;
            }
    }
    return j+1
};