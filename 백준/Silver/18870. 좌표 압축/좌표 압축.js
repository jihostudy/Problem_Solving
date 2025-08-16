// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(inputs[0]);

const numbers = inputs[1].split(" ").map(Number);
// console.log(numbers);

const sorted_numbers = [...new Set(numbers)];
sorted_numbers.sort((a, b) => a - b);

const count = sorted_numbers.length;

const set = {};
for (const [index, num] of sorted_numbers.entries()) {
  set[num] = index;
}

// 정답 출력
let answers = [];
for (const number of numbers) {
  answers.push(set[number]);
}
console.log(answers.join(" "));
