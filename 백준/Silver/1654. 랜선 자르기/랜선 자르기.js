// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [K, target] = inputs[0].split(" ").map(Number); // K(랜선의 개수), target(필요한 랜선의 개수)
// console.log(K, target);

const cabels = inputs.slice(1).map((val) => Number(val));
cabels.sort((a, b) => a - b);
// console.log(cabels);

let answer = 1;
let [left, right] = [1, Math.max(...cabels)];
// console.log(left, right);

// 이분탐색
while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  let sum = 0;
  for (const cabel of cabels) {
    sum += Math.floor(cabel / mid);
  }

  if (sum >= target) {
    left = mid + 1;
    answer = Math.max(answer, mid);
  } else {
    right = mid - 1;
  }
}
console.log(answer);
