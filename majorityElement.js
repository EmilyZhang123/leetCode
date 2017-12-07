/* Created on 2017/12/7. */
/**
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length==1 && nums != '') return nums[0];
    var m={};
    for (var i=0;i<nums.length;i++){
        if(m[nums[i]]){
            m[nums[i]]=+1;
        }else {
            m[nums[i]]=1;
        }
    }
    console.log(m);
    for (i in m){
        console.log(i)
        // if (m[i]>nums.length/2) return nums[i];
    }
};
console.log(majorityElement([2,2]));