/* Created by emily on 2017/11/22. */
/**
 * @param {number[]} nums
 * @return {number}
 */

var findShortestSubArray = function(nums) {
    if (nums.length == 0 || !nums) {
        return 0;
    }
    var m = {};
    var maxTimes = 0;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var item = m[num];
        if (item) {
            item.right = i;
            item.times++;
            maxTimes = Math.max(item.times, maxTimes);
        } else {
            m[num] = {
                times: 1,
                left: i,
                right: i
            }
            maxTimes = Math.max(1, maxTimes);
        }
    }
    var min = 2147483647;
    for (var i in m) {
        var item = m[i];
        if (item.times == maxTimes) {
            if (item.left == item.right) {
                min = Math.min(1, min);
            } else {
                min = Math.min(item.right - item.left + 1, min);
            }
        }
    }
    return min;
};};