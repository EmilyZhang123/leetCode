/* Created by emily on 2017/11/26. */
/**
 * Given an array of integers and an integer k,
 * you need to find the number of unique k-diff pairs in the array.
 * Here a k-diff pair is defined as an integer pair (i, j),
 * where i and j are both numbers in the array and their absolute difference is k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*var findPairs = function(nums, k) {
    nums=nums.sort();
    console.log(nums);
    var res=0,j=0;
    var n=nums.length;
    for (var i=0;i<n;i++){
        j=Math.max(j,i+1);

        while (j<n && Math.abs(nums[j]-nums[i])<k) {
            j++;
        }
        if (j<n && Math.abs(nums[j]-nums[i])==k){
            ++res;
        }
        while (i<n-1 && nums[i] == nums[i+1]) {
            ++i;
        }
        j=0;
    }
    return res
};*/
var findPairs = function(nums, k) {
    if (k < 0) return 0;
    var m={};
    var count=0;
    for (var i=0;i<nums.length;i++){
        var item=m[nums[i]];
        if (item) {
            m[nums[i]]+=1;
        }else {
            m[nums[i]]=1
        }
    }
    for ( item in m){
        if (k==0){
            if(m[item]>=2) count+=1;
        }else  {
            if (parseInt(item)+k in m) count+=1;
        }
    }
    return count;

};

console.log(findPairs([1,2,3,4,5],-1));