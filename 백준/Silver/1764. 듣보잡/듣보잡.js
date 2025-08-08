const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
// console.log(N, M);

const hears = inputs.slice(1, N + 1);
const sees = inputs.slice(N + 1, N + 1 + M);

const maps = new Set();
for (const hear of hears) {
  maps.add(hear);
}

const answers = [];
for (const see of sees) {
  if (maps.has(see)) {
    answers.push(see);
  }
}

// 오름차순 정렬
answers.sort();
console.log(answers.length);
console.log(answers.join("\n"));
