/**
 * Created by Administrator on 2017/11/5.
 *
 */
  // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var i = l1, j = l2;
    // ListNode的类声明中查看，如果你给了ListNode(val)的声明，需要单参数才能够调用。
    var res = new ListNode(0);
    curr = res;
    while(i && j && i.val !== undefined && j.val !== undefined){
        if(i.val < j.val){
            curr.next = i;
            i = i.next;
        }else{
            curr.next = j;
            j = j.next;
        }
        curr = curr.next;
    }
    if(i && i.val !== undefined){
        curr.next = i;
    }
    if(j && j.val !== undefined){
        curr.next = j;
    }
    return res.next || [];
};
