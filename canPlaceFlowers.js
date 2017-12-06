/* Created on 2017/12/5. */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n==0) return true;
    for (var i=0;i<flowerbed.length;i++){
        if (flowerbed[i]==0){
            var pre =(i==0?0:flowerbed[i-1]);
            var next=(i==flowerbed.length-1?0:flowerbed[i+1])
            if (pre+next==0){
                flowerbed[i] = 1;
                n--;
            }
        }
    }
    return n<=0;

};
console.log(canPlaceFlowers([1,0,0,0,1],2));