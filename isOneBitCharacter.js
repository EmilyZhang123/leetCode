/* Created by emily on 2017/11/21. */
/**
 * We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).
 *1 <= len(bits) <= 1000.
 * bits[i] is always 0 or 1.
 *  @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for (var i=0;i<bits.length;i++){
        if (bits[i]==1){
            bits[i+1] = 1;
            i++;
        }
    }
    return bits[bits.length-1] ==0
};