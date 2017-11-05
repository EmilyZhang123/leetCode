/**
<<<<<<< HEAD
 * Created by Administrator on 2017/11/4.
 */
/**
=======
>>>>>>> origin/master
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
<<<<<<< HEAD
    var prefix="";
   if(strs==null || strs.length==0){
       prefix="";
       // console.log("nulllll")

   }else {
       var minlen=strs[0].length;
       for(i=1;i<strs.length;i++){
           if(strs[i].length<minlen){
               minlen=strs[i].length;
               console.log('minlen'+minlen)

           }
       }
       for(j=0;j<=minlen;j++){
           for(k=0;k<strs.length;k++){
                if(j==strs[k].length||strs[0][j]!=strs[k][j]){
                    prefix=strs[0].substr(0,j)
                    // console.log("jjjjjj-----")
                }
               // console.log("strs[k][j]----"+strs[k][j]+"////j----"+j+"///kkkkkkkk---"+k);
           }
       }
       // console.log("aaaa---------------------")
   }
   
   return prefix
    console.log("aaaa---------------------")
    console.log(prefix)
};

longestCommonPrefix(['a'])
=======
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
>>>>>>> origin/master
