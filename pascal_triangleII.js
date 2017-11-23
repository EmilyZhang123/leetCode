/* Created by emily on 2017/11/23. */
/**
 * Given an index k, return the kth row of the Pascal's triangle.
 * For example, given k = 3,Return [1,3,3,1].

 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex==0) return [1];
    var res=[];
    for (var i=0;i<=rowIndex;i++) res[i]=[];
    for(var i=0;i<=rowIndex;i++){
        for (j=0;j<=i;j++){
            if (i==1){
                res[i][j]=1;
            }else if (j==0 || j==i){
                res[i][j]=1;
            }else {
                res[i][j]=res[i-1][j-1]+res[i-1][j];
            }
        }
    }
    return res[rowIndex]
};
// console.log(getRow(4));
var getRow1 = function(rowIndex) {
    var row = [];
    row[0] = 1;
    for (var k =1;k<rowIndex+1;k++) {
        row[k] = 0;
    }
    for(var i=1; i<rowIndex+1; i++) {
        for(var j=i; j>=1; j--) {
            row[j] += row[j-1];
        }
    }
    return row;
};
console.log(getRow1(4));
