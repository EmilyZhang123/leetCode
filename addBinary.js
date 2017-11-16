/* Created by emily on 2017/11/16. */
/**
 * Given two binary strings, return their sum (also a binary string).
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a==null||a.length==0) return b;
    if(b==null||b.length==0) return a;
    var sum=[];
    var flag=0;
    var tmp='';
    if(a.length<b.length){
        tmp=a;
        a=b;
        b=tmp;
    }
    b=b.split('').reverse();
    a=a.split('').reverse();
    for(var i=0;i<a.length;i++){
        a[i]=parseInt(a[i]);
       if (i<b.length){
           b[i]=parseInt(b[i]);
           sum[i]=(a[i]+b[i]+flag)%2;
           if(a[i]+b[i]+flag>1){
                flag = 1;
            }else {
               flag=0
           }
        }
       if (i>=b.length){
            sum[i]=(a[i]+flag)%2;
           if(a[i]+flag>1){
                flag = 1;
            }else {
               flag=0
           }
        }
        if(flag==1){
            sum[i+1]=1;
        }
    }
    return sum.reverse().join('')
};
console.log(addBinary('1010','1011'));
var addBinary1 = function(a, b) {
    return (parseInt(a,2)+parseInt(b,2)).toString(2)
}
// console.log(addBinary1("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101","110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));
