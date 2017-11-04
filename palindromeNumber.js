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
//string
function palindrome(str) {
    var len = str.length;
    console.log(len);

    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            // return false;
            console.log('0');
        }
    }
    // return true;
    console.log('1');

}

palindrome("abc");