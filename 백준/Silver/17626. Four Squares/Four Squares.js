// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim();

const N = Number(inputs);

dp = Array.from({ length: N + 1 }, () => Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[N]);
