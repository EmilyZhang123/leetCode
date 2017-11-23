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
    return maxProfit;
};
// console.log(maxProfit([7,1,5,3,6,4]));
// Design an algorithm to find the maximum profit.
// You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
// However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
var maxProfit1 = function(prices) {
    var min=prices[0];
    var maxProfit1=0;
    for (var j=1;j<prices.length;j++){
        if (prices[j]>min) {
            maxProfit1=prices[j]-min+maxProfit1;
        }
        min=prices[j];
    }
    return maxProfit1;

};
console.log(maxProfit1([7,1,5,3,6,4]));
