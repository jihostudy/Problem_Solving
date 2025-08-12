// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const Testcase = Number(inputs[0]);

let count = 1;
let answers = [];
for (let i = 0; i < Testcase; i++) {
  const N = Number(inputs[count++]);
  const values = inputs.slice(count, count + N).map((elm) => elm.split(" "));
  count += N;

  const clothes = {};
  for (const value of values) {
    const [name, category] = value;
    if (!clothes[category]) clothes[category] = 0;
    clothes[category] += 1;
  }
  // console.log(clothes);

  // 정답 출력
  let answer = 1;
  for (const [key, value] of Object.entries(clothes)) {
    answer *= value + 1;
  }
  answer -= 1;

  answers.push(answer);
}
console.log(answers.join("\n"));
