/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const arr = Array.from(new Array(m), () => new Array(n).fill(1));

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      let sum = 0;
      // 왼
      if (col - 1 >= 0) {
        sum += arr[row][col - 1];
      }
      // 위
      if (row - 1 >= 0) {
        sum += arr[row - 1][col];
      }
      arr[row][col] = sum === 0 ? 1 : sum;
    }
  }
  // for (const arrary of arr) {
  //   console.log(arrary);
  // }
  return arr[m - 1][n - 1];
};