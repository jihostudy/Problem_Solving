/** 백준 https://www.acmicpc.net/problem/2747 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const n = parseInt(input);

const arr = new Array(n + 1).fill(0);

arr[0] = 0;
arr[1] = 1;
for (let i = 2; i < n + 1; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

/** 결과 출력 */
console.log(arr[n]);
