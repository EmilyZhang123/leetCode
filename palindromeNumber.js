/**
 * Created by emily on 2017/7/11.
 */
//判断回文数，负数不是回文数
var isPalindrome = function(x) {
    var b = 0;
    if(x>=0){
        b=parseInt(x.toString().split("").reverse().join(""));
        if(x==b){
            // return true;
            console.log('1');
        }
        else {
            // return false;
            console.log('0');

        }
    }
    else {
        // return false;
        console.log('0');

    }
};
isPalindrome(222);
