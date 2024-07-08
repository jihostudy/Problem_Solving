var searchMatrix = function (matrix, target) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(...matrix[i]);
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // #1. 큰 경우
    if (arr[mid] > target) {
      right = mid - 1;
    }
    // #2. 작은 경우
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    // #3. 정답
    else {
      return true;
    }
  }
  return false;
};