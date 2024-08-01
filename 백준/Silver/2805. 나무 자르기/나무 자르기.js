const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0]?.split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const len = arr.length;

arr.unshift(0);
arr.sort((a, b) => a - b);

let cnt = 0;
let sum = 0;
let currentIndex = len;

let result;
while (currentIndex >= 0) {
  // 수정 필요
  // # 정답 찾은 경우
  if (sum === M) {
    result = arr[currentIndex];
    break;
  }
  // # 중간에 있는 경우
  else if (sum > M) {
    const over = sum - M;
    result = arr[currentIndex];
    result += Math.floor(over / cnt);
    break;
  }

  /// # 더 가야하는 경우
  else {
    cnt += 1;
    sum += cnt * (arr[currentIndex] - arr[currentIndex - 1]);
    currentIndex -= 1;
  }
}

console.log(result);
