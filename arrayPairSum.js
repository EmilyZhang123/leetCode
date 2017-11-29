/* Created on 2017/11/29. */
/**
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn)
 * which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums=nums.sort(function sortNumber(a,b) {
        return a - b
    });
    // console.log(nums);
    var sum=0;
  for (var i=0;i<nums.length;i=i+2){
      sum=sum+nums[i];
  }
    return sum;
};

console.log(arrayPairSum([7,3,1,0,0,6]));
/*
//
升序排列
function sortNumber(a,b)
{
    return a - b
}
降序排列则为
function sortNumber(a,b)
{
    return b - a
}*/
