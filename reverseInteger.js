/**
 * Created by emily on 2017/7/11.
 */
//反向一个数字

var reverse = function(x) {
    var res = 0;
    while(x){
        res = res*10 +x%10;
        x = parseInt(x/10);
    }
    if(res> Math.pow(2,31) || -res>Math.pow(2,31)){
       res = 0;
    }
    // return res;
    console.log(res);
};

reverse(-123);
