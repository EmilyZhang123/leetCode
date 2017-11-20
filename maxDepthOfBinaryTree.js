/* Created by emily on 2017/11/20. */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return 1+Math.max(left,right)

};