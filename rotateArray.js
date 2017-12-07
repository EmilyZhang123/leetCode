/* Created on 2017/12/6. */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums == null || nums.length == 0 || k % nums.length == 0) return;
    var left=nums.splice(0,nums.length-k).reverse();
    console.log(nums);
    console.log('1');
    var right=nums.reverse();
    console.log(nums);
    console.log('2');
    nums=left.concat(right).reverse();
    console.log(nums);
    console.log('3');
};
console.log(rotate([1,2],1));