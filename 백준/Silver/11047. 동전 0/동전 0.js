// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
const coins = inputs
  .slice(1, N + 1)
  .map(Number)
  .sort((a, b) => b - a)
  .filter((coin) => coin <= M);

let leftover = M;
let answer = 0;
for (const coin of coins) {
  answer += Math.floor(leftover / coin);
  leftover %= coin;
}
console.log(answer);