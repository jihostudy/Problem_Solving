/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const [m, n] = [text1.length + 1, text2.length + 1];
  const dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      let value;
      // 같은 문자인 경우
      if (text1.charAt(row - 1) == text2.charAt(col - 1)) {
        value = dp[row - 1][col - 1] + 1;
      }
      // 다른 문자인 경우
      else {
        value = Math.max(dp[row - 1][col], dp[row][col - 1]);
      }

      dp[row][col] = value;
    }
  }
  return dp[m - 1][n - 1];
};
