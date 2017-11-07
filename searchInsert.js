/* Created by emily on 2017/11/7. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 */
var searchInsert = function(nums, target) {
        var flag=0;
        for(i=0;i<nums.length;i++){
            if(nums[i]<target){
                if(i==nums.length-1){
                    nums.splice(i,0,target);
                     flag=i+1;
                    break;
                }

            }else if(nums[i]==target){
                 flag=i;
                 break;
            }else {
                nums.splice(i,0,target);
                return flag=i;
            }
        }

    return flag
};
console.log(searchInsert([1,3,5,6],7));
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};