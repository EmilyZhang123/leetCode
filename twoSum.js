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
                // return i,j;   return只能返回一个值
                a.push(i);
                a.push(j);
                console.log(a);
                // return a;
            }
        }
    }
};
twoSum([3,2,4],6);
