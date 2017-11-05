/**
 * Created by Administrator on 2017/11/5.
 */
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
var isValid = function(s) {
    var stack=[];
    function testBrackets(left,right) {
        if(left=='('&&right==')'){
            return true
        }else if(left=='['&&right==']'){
            return true

        }else if (left=='{'&&right=='}'){
            return true
        }
            return false
    }
    var top=null;
    if(s.length>1){
        for(i in s){
            if(s[i]=="("||s[i]=="["||s[i]=='{'){
                stack.push(s[i])
            }else {
                if(stack.length>0){
                    top=stack.pop();
                    testBrackets(top,s[i])
                }else {
                    return false
                }
            }
        }
    }else {
        return false
    }

}
isValid('([])')