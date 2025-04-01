const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();

const [N, K] = input.split(" ").map(Number);

let answer;
let count = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    count += 1;
  }
  if (count === K) {
    answer = i;
    break;
  }
}

if (!answer) console.log(0);
else console.log(answer);
