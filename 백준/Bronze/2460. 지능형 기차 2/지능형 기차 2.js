const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const arr = [];
for (const input of inputs) {
  const array = input.split(" ").map(Number);
  arr.push(array);
}

let peopleCount = 0;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < 10; i++) {
  const [minus, add] = arr[i];
  peopleCount -= minus;
  peopleCount += add;

  max = Math.max(max, peopleCount);
}
console.log(max);
