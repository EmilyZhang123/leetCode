/* Created by emily on 2017/11/16. */
/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

 You may assume the integer do not contain any leading zero, except the number 0 itself.

 The digits are stored such that the most significant digit is at the head of the list.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    for(var i = digits.length - 1; i >= 0; i--){
        var sum = digits[i] + carry;
        if(sum === 10){
            digits[i] = 0;
            carry = 1;
        }else{
            digits[i] = sum;
            carry = 0;
        }
    }
    if(carry === 1){
        digits.unshift(1);
    }
    return digits;
};