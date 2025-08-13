// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const numbers = inputs.slice(1).map(Number);

const get_circle_value = (N) => {
  const default_arr = [1, 1, 1, 2, 2];
  if (N <= 5) {
    return default_arr[N - 1];
  }
  const arr = [...default_arr];
  for (let i = 5; i < N; i++) {
    const val = arr[i - 1] + arr[i - 5];
    arr.push(val);
  }
  // console.log(arr);
  return arr[N - 1];
};

let answers = [];
for (const number of numbers) {
  const answer = get_circle_value(number);
  answers.push(answer);
}

console.log(answers.join("\n"));
