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
            console.log('old====['+parseInt(i/origin_c)+']['+[i%origin_c]+']'+nums[parseInt(i/origin_c)][i%origin_c])
            new_nums[parseInt(i/c)][i%c]=nums[parseInt(i/origin_c)][i%origin_c];
           // console.log('==ggggg===');
            console.log('new====['+parseInt(i/c)+']['+[i%c]+']'+ new_nums[parseInt(i/c)][i%c]);

        }
        console.log('=====');
        return new_nums;
    }else {
        return nums;
    }

};
console.log(matrixReshape([[5,3],[3,4]],1,4));


