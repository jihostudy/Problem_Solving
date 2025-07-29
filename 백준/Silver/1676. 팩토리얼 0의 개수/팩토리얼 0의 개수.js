const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();

const N = parseInt(input);

/**
 * 팩토리얼 계산 : DP
 * [1,1!,2!,3!,4!,5!,6!,...]
 * [1,1,2,6,24,120,720,...]
 */
// const factorial = (num) => {
//   const dp = new Array(num + 1).fill(1);
//   for (let i = 1; i <= num; i++) {
//     dp[i] = dp[i - 1] * i;
//   }
//   return dp[num];
// };

// let value = factorial(N);
// console.log(value);

// let answer = 0;
// while (value > 0) {
//   if (value % 10 !== 0) {
//     break;
//   }
//   answer += 1;
//   value = Math.floor(value / 10); // 몫
// }
// console.log(answer);

/**
 * 5의 개수 구하기
 */
const getFiveMultiples = (x) => {
  let result = 0;
  for (let i = 5; i <= x; i *= 5) {
    result += parseInt(x / i);
  }
  return result;
};
console.log(getFiveMultiples(N));
