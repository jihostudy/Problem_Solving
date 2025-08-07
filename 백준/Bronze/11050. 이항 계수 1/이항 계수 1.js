const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim();

/**
 * nCk
 *
 *   n!
 * -------
 * k!(n-k)!
 */

const [N, K] = inputs.split(" ").map(Number);
// console.log(N, K);

/**
 * dp 배열을 0! ~ N! 까지 구해놓기 -> 값 구하기
 */

const dp = new Array(N + 1).fill(1);
for (let i = 1; i < N + 1; i++) {
  dp[i] = dp[i - 1] * i;
}

console.log(dp[N] / (dp[K] * dp[N - K]));
