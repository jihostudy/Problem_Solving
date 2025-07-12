/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // [1,2] 길이  : n인 배열의 마지막 값을 구하면 됨
  let array = new Array(n).fill(0);

  array[0] = 1;
  if (n < 2) {
    return array[n - 1];
  }
  array[1] = 2;

  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  console.log(array);

  return array[n - 1];
};

