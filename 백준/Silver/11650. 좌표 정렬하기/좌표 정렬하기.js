const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(inputs[0]);
// console.log(inputs);

const coordinates = inputs
  .slice(1, N + 2)
  .map((input) => input.split(" ").map(Number));

/**
 * 1. x좌표 오름차순
 * 2. y좌표 오름차순
 */

coordinates.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
// console.log(coordinates);

let ans = [];

for (let i = 0; i < N; i++) {
  let answer = coordinates[i].join(" ");
  ans.push(answer);
}

console.log(ans.join("\n"));
