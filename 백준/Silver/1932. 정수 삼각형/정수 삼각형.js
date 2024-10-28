const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift()?.trim());

const arr = Array.from(Array(N), () => new Array(N).fill(0));

input.forEach((array, row) => {
  const nArr = array.trim().split(" ").map(Number);
  nArr.forEach((val, col) => {
    arr[row][col] = val;
  });
});

// console.log(arr);

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    let val = arr[row][col];

    // Case1: row = 0인 경우
    if (row - 1 < 0) {
      // 아무것도 더하지 않음
    }
    // Case2: col = 0인 경우
    else if (col - 1 < 0) {
      val += arr[row - 1][col];
    }
    // Case3: 일반 경우의 수
    else {
      val += Math.max(arr[row - 1][col], arr[row - 1][col - 1]);
    }
    arr[row][col] = val;
  }
  // console.log(arr);
}

console.log(Math.max(...arr[N - 1]));
