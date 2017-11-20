/* Created by emily on 2017/11/17. */
 // * Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null&&q===null){
        return true;
    }
    if(p===null&&q!==null){
        return false;
    }
    if(q===null&&p!==null){
        return false;
    }
    if(p.val!==q.val){
        return false;
    }
    if(isSameTree(p.left,q.left)&& isSameTree(p.right,q.right)){
        return true;
    }
    else{
        return false;
    }

};