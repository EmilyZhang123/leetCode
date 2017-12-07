/* Created on 2017/12/6. */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums == null || nums.length == 0 || k % nums.length == 0)
        return;
    var turns = k % nums.length;
    var middle = nums.length - turns;

    reverse_diy(nums, 0, middle-1); // reverse left part
    reverse_diy(nums, middle, nums.length-1); // reverse right part
    reverse_diy(nums, 0, nums.length-1); // reverse whole part
};
console.log(rotate([1,2],1));

function reverse_diy(arr,s,e) {
    while(s < e)
    {
        var temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;

        s++;
        e--;
    }
}