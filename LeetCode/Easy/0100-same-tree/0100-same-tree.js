// p,q are roots of two binary trees
var isSameTree = function (p, q) {
  // #1. p and q are null
  if (!p && !q) {
    return true;
  }
  // #2. p and q should not have null + same value
  else if (!p || !q || p.val !== q.val) {
    return false;
  }
  // #3. Check left and right validation
  else {    
    if (!isSameTree(p.left, q.left)) {
      return false;
    }
    return isSameTree(p.right, q.right);    
  }
};
