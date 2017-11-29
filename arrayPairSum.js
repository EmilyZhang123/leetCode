/* Created on 2017/11/29. */
/**
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn)
 * which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums=nums.sort();
    console.log(nums);
    var sum=0;
  /*  for (var i in nums){
        if (i%2==0){
            sum+=nums[i];
        }
    }*/

  for (var i=0;i<nums.length;i=i+2){
      sum=sum+getMin(nums[i],nums[i+1]);
  }
    return sum;
};
function getMin(a,b) {
    if (a<b) return a;
    if (b<a) return b;
    if (a=b) return a
}

console.log(arrayPairSum([7,3,1,0,0,6]));
