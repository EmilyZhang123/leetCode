var longestCommonPrefix = function(strs) {
    var prefix="";
   if(strs==null || strs.length==0){
       prefix="";
       // console.log(prefix)
    return prefix
  }else {
       var minlen=strs[0].length;
       for(i=1;i<strs.length;i++){
           if(strs[i].length<minlen){
               minlen=strs[i].length;

           }
       }
       for(j=0;j<=minlen;j++){
           for(k=0;k<strs.length;k++){
                if(j==strs[k].length||strs[0][j]!=strs[k][j]){
                    prefix=strs[0].substr(0,j);
                    // console.log(prefix)
                 return prefix
  }
           }
       }
   }
   return prefix
};
longestCommonPrefix(['z','b']);
