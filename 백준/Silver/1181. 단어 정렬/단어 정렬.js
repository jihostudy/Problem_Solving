const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

// console.log(input);
const N = parseInt(input[0]);
// console.log(N);

const origin_arr = input.slice(1, N + 2);
// 중복 단어 제거
const set = new Set(origin_arr);
const arr = new Array(...set);
const len = arr.length;

arr.sort((a, b) => {
  // #2. 사전 순
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  // #1. 길이 오름차순
  else {
    return a.length - b.length;
  }
});
for (const elm of arr) {
  console.log(elm);
}
