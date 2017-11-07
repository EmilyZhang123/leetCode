/* Created by emily on 2017/11/7. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    var dp = [], max = nums[0], previous, current;
    dp[0] = {previous : 0, current: nums[0]};
    for(var i = 1; i < nums.length; i++){
        previous = dp[i - 1].current;
        current = Math.max(nums[i], nums[i] + dp[i - 1].current,
            nums[i] + nums[i - 1] + dp[i - 1].previous);
        dp[i] = {previous : previous, current: current};
        max = Math.max(current, max);
    }
    return max;
};