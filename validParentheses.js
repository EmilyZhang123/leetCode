/**
 * Created by Administrator on 2017/11/5.
 */
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
var isValid = function(s) {
    var stack=[];
    function testBrackets(left,right) {
        if(left=='('&&right==')'){
            console.log('()11111111');
            return true
        }else if(left=='['&&right==']'){
            console.log('[]11111111');
            return true

        }else if (left=='{'&&right=='}'){
            console.log('{}11111111');
            return true
        }
        console.log('0000000');
        return false
    }
    var top=null;
    if(s.length>1){
        for(i in s){
            if(s[i]=="("||s[i]=="["||s[i]=='{'){
                stack.push(s[i])
            }
            if(stack.length>0){
                // top=stack.pop();
                top=stack.slice(stack.length-1,stack.length)
                console.log('top'+top)
                console.log('s[i]'+s[i])
                testBrackets(top,s[i])
            }else {
                console.log('000000000000-====');
                return false
            }
            }
    }else {
        console.log('000000000000-ppppppp==');
        return false
    }
}
isValid("()")