const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const L = Number(inputs[0]);
const values = inputs[1].split("");

// console.log(L);
// console.log(values);

/**
 * L : 31
 * mod : 1234567891
 * ai * r**(i) for i in (0 ~ L-1)
 */

/**
 * r**(i)를 계산한 dp 배열 사전에 만들기 (길이 : L)
 *
 * 각 value of values에 대해
 * 1. ai -> 값으로 변환하기
 * ai.charCodeAt(0) - 96
 *
 * 2. 각 값을 더하기
 * 3. mod로 나누기
 */
const R = 31;
dp = new Array(L).fill(1);
const MOD = 1234567891;
for (let i = 1; i < L; i++) {
  dp[i] = (dp[i - 1] * R) % MOD;
}
// console.log("dp: ", dp);

let answer = 0;

for (const [index, value] of values.entries()) {
  const a = value.charCodeAt(0) - 96;
  answer += a * dp[index];
  // console.log("index:", index, "adding : ", answer);
  answer %= MOD;
}
console.log(answer);
