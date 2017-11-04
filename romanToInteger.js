/* Created by emily on 2017/11/3. */
var romanToInt = function(s) {
    var map={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    var res= map[s[0]];

    for (i=1;i<s.length;i++){

        if(map[s[i-1]]<map[s[i]]){
            res=map[s[i]]-2*map[s[i-1]]+res;
            console.log("+////"+i+',,,,,'+s[i]+'///////'+map[s[i]]+'------'+res)
        }else {
            res+=map[s[i]];
            console.log("-////"+i+',,,,,'+s[i]+'///////'+map[s[i]]+'------'+res)
        }
    }
    console.log(res) ;
};
romanToInt("MDCCCLXXXIV")