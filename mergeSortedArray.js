/* Created by emily on 2017/11/17. */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m==0)  nums1=nums2;
    var len=m+n;
    while (m>0&&n>0){
        if(nums1[m-1]>nums2[n-1]){
            nums1[--len]=nums1[--m];
        }else {
            nums1[--len]=nums2[--n];
        }
        while (m>0){
            nums1[--len]=nums1[--m]
        }
        while(n>0){
            nums1[--len]=nums2[--n]
        }
    }
};