/* Created by emily on 2017/11/21. */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows==0) return [];
    var res=[];
    for (var i=0;i<numRows;i++) res[i]=[];
    for(var i=0;i<numRows;i++){
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
    return res
};
