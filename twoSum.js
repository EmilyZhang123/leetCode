/**
 * Created by emily on 2017/7/11.
 */
//任意一个数组中两数字之和等于target，并返回数组下标
// twoSum;
var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        var a= [];
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                a.push(i);
                a.push(j);
                return a;
            }
        }
    }
};
// console.log(twoSum([3,2,4],6));

// 167. Two Sum II - Input array is sorted
var twoSum2 = function(numbers, target) {
 var left=0;
 var right=numbers.length-1;
 while (left<right){
     if(numbers[left]+numbers[right]==target){
         return [left+1,right+1];
     }
     else if(numbers[left]+numbers[right]<target){
         left+=1;

     }else if(numbers[left]+numbers[right]>target){
         right-=1;
     }
 }
};
console.log(twoSum2([2,3,4],6));
