/** https://www.acmicpc.net/problem/1463 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();

const N = parseInt(input);

const arr = new Array(N + 1);

for (let i = 1; i < N + 1; i++) {
  if (i == 1) arr[i] = 0;
  else if (i == 2) arr[i] = 1;
  else {
    const candidates = [];
    if (i % 2 === 0) {
      candidates.push(arr[i / 2]);
    }
    if (i % 3 === 0) {
      candidates.push(arr[i / 3]);
    }
    candidates.push(arr[i - 1]);

    arr[i] = Math.min(...candidates) + 1;
  }
}
console.log(arr[N]);
