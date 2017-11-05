/**
 * Created by Administrator on 2017/11/4.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
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