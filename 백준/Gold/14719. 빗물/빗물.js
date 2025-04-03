const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [H, W] = input.shift()?.split(" ").map(Number);
const heights = input.shift()?.split(" ").map(Number);

const arr = Array.from(Array(H), () => new Array(W).fill(0));

const len = heights?.length;

// #1. 2차원 배열 구성하기
for (let col = 0; col < len; col++) {
  const val = heights[col];
  for (let row = 0; row < val; row++) {
    arr[row][col] = 1;
  }
}

// #2. 각 row 에 대해 고인 물 구하기
let answer = 0;
for (let row = 0; row < H; row++) {
  let left = undefined;
  let sum = 0;
  for (let col = 0; col < W; col++) {
    const val = arr[row][col];
    if (val === 1) {
      if (sum !== 0) {
        answer += sum;
        sum = 0;
      }
      left = col;
    } else if (val === 0 && left !== undefined) {
      sum += 1;
      // console.log("Adding row: ", row, "col: ", col);
    }
  }
}
console.log(answer);
