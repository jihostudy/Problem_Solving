const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(inputs[0]);
const sizes = inputs[1].split(" ").map(Number);
const [T, P] = inputs[2].split(" ").map(Number);

// console.log(N);
// console.log(sizes);
// console.log(T, P);

/**
 * 1. 티셔츠 개수 : 각 value 돌며 Math.ceil(value / T)
 * 2. 펜 묶음 개수 : Math.floor(N / P)
 * 3. 한 자루씩 개수 : N - 2.
 */

// 1
let tCount = 0;
for (const size of sizes) {
  tCount += Math.ceil(size / T);
}
console.log(tCount);

// 2 + 3
const pen = Math.floor(N / P);
const individual = N - pen * P;
console.log(pen, individual);
