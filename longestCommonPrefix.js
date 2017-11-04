/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length>1) {
        var prefix = "";
        var minlen = strs[0].length;
        for(i=1;i<strs.length;i++){
            if( strs[i]<minlen){
                minlen=strs[i];
            }
        }
        for(j=0;j<minlen;j++){

            for(k=0;k<strs.length-1;k++){
                if(strs[0][0]!=strs[k][0]){
                    prefix=""
                }else if(strs[k][j]!=strs[k+1][j]){
                    prefix=strs[0].substr(0,j)

                }else {
                    prefix=strs[0]
                }
            }
        }
        console.log("111111111111111111refi111x")
        console.log(prefix)

    }else if(strs.length==1){
        prefix=strs[0]
        console.log("prefi111x")
        console.log(prefix)
    }else{
        prefix=""
        console.log("prefi111x-------------")
        console.log(prefix)

    }

};

longestCommonPrefix(['a','ab','ac'])