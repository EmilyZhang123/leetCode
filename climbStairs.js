/* Created by emily on 2017/11/17. */
/**
 * n will be a positive integer.
 You are climbing a stair case. It takes n steps to reach to the top.
 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1) return n;
    var step1=1;
    var step2=1;
    var stepn=2;
    for(var i=2;i<=n;i++){
        stepn=step1+step2;
        step2=step1;
        step1=stepn
    }
    return stepn;
};
console.log(climbStairs(5));