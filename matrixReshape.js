/* Created on 2017/11/29. */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var origin_r=nums.length;
    var origin_c=nums[0].length;
    var n=origin_c*origin_r;
    var new_nums=[];
    if (n==r*c){
        for (var i=0;i<n;i++){
            new_nums[parseInt(i/c)]= [];
            new_nums[parseInt(i/c)][i%c]=nums[parseInt(i/origin_c)][i%origin_c];
        }
        return new_nums;
    }else {
        return nums;
    }

};
console.log(matrixReshape([[1,2],[3,4]],1,4));

/*var a=[[1,2],[3,4]];
var y=a.length;
var x=a[0].length;
for (var i=0;i<x*y;i++){
    console.log(a[i%x][i%y])
}*/
