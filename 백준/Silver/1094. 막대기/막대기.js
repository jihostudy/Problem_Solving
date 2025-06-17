const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();

const target = parseInt(input);

const arr = [64];

let answer;
let count = 0;
while (true) {
  // 정답인 경우
  let sum = arr.reduce((arr, curr) => arr + curr, 0);
  if (sum == target) {
    answer = arr.length;
    break;
  }
  // 정답이 아닌 경우
  const min = arr.shift();
  sum -= min / 2; // 최소갑을 빼고

  arr.unshift(min / 2);
  // 부족하면 자른 막대 절반을 다시 넣는다
  if (target > sum) {
    arr.unshift(min / 2);
  }

  // 오름차순 정렬
  arr.sort((a, b) => a - b);

  count += 1;
}

console.log(answer);
