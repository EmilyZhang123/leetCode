/* Created by emily on 2017/11/23. */
/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min=prices[0];
    var maxProfit=0;
    for(var i=1;i<prices.length;i++){
        if (prices[i]>min){
            maxProfit=Math.max(prices[i]-min,maxProfit);
            console.log(maxProfit);
        }else if(prices[i]<min) {
            min =prices[i];
        }
    }
    return maxProfit
};
console.log(maxProfit([7,1,5,3,6,4]));