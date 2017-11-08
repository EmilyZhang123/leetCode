/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

 If the last word does not exist, return 0.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/\s+/g, ' ')
    if(s.length==0||s==' '){
        return 0
    }
    var str_array=s.split(' ')
    for (i=str_array.length-1;i>=0;i--){
        if(str_array[i]!=''){
            return str_array[i].length
        }
    }

};
console.log(lengthOfLastWord("a"))