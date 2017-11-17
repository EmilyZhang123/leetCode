/* Created by emily on 2017/11/16. */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
     return parseInt(Math.sqrt(x))
};
// console.log(mySqrt(8));
// 二分法
var mySqrt1 = function(x) {
    if(x<0) return -1;
    if(x==0) return 0;
    if(x>0){
        var start=0;
        var end=x;
        var result=1;
        var mid=1;
        while(Math.abs(result-x)>0.000001){
            mid=(start+end)/2;
            result=mid*mid;
            if(result>x){
                end=mid;
            }else {
                start=mid;
            }
        }
        return parseInt(mid);
    }
};
console.log(mySqrt1(8192));
// 牛顿迭代法
/*var mySqrt2 = function(x) {

}*/
