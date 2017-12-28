/* Created on 28/12/2017. */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort(function (a, b) { return a-b });
    var disappeared=[];
    for (var i=0;i<nums.length;i++){
        if(nums[i+1]-nums[i]>1){
            // disappeared.concat([])
        }
    }
};
console.log(findDisappearedNumbers([2,5,1,6,4]));