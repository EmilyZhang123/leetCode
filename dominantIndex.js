/* Created on 28/12/2017. */
/**
 * nums will have a length in the range [1, 50].
 * Every nums[i] will be an integer in the range [0, 99].
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max=nums[0];
    var index=0;
    var c=0;
    for(var i=1;i<nums.length;i++){
        max=Math.max(max,nums[i])
        if(max==nums[i]){
            index = i;
        }
    }
    nums.splice(index,1);
    nums.forEach(function (value) {
       if(2*value>max){
           c+=1;
       }
    });
    if(c>0){
        return -1
    }else {
        return index

    }
};
console.log(dominantIndex( [1, 2, 3, 4]));