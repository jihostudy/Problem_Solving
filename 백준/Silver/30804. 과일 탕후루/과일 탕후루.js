// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(inputs[0]);
const numbers = inputs[1].split(" ").map(Number);

let answer = 0;
let [left, right] = [0, 0];

let group = Array(10).fill(0); // group [i] 는 현재 그룹에서 i번 과일이 몇개 있는지 나타냄
let count = 0; // 과일 갯수
let kind = 0; // 과일 종류

while (right < N) {
  if (group[numbers[right]] === 0) {
    kind += 1;
  }
  group[numbers[right]] += 1;
  ++count;

  // kind 2 될때까지 left를 올림
  while (kind > 2) {
    group[numbers[left]] -= 1;
    if (group[numbers[left]] === 0) {
      kind -= 1;
    }
    count -= 1;
    ++left;
  }

  answer = Math.max(answer, count);
  ++right;
}

console.log(answer);
