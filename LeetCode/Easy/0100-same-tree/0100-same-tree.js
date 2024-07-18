// p,q are roots of two binary trees
var isSameTree = function (p, q) {
  console.log("Checking p,q", p, q);
  // 두개다 null인 경우
  if (p === null && q === null) {
    console.log("p,q 둘다 null이라서 true");
    return true;
  }
  // 둘다 null이 아닌 경우
  else if (p !== null && q !== null) {
    if (p.val !== q.val) {
      console.log("p,q 둘다 null이 아니고 값이 같지 않아서 false");
      return false;
    }
    console.log("p,q 둘다 null이 아니고 값이 같아서 다음값 판정");
    if (
      (p.left !== null && q.left === null) ||
      (p.left === null && q.left !== null)
    ) {
      return false;
    }
    if (
      (p.right !== null && q.right === null) ||
      (p.right === null && q.right !== null)
    ) {
      return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  // 둘중 하나만 null인 경우
  else {
    return false;
  }
};
