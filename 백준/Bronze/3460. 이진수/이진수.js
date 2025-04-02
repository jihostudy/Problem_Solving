const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [t, ...Arr] = input;

const T = parseInt(t);
const arr = Arr.map(Number);

for (let testcase = 0; testcase < T; testcase++) {
  let value = arr[testcase];
  const answer = [];
  while (value !== 0) {
    answer.unshift(value % 2);
    value = Math.floor(value / 2);
  }

  // 출력
  let print_answer = "";
  const len = answer.length;
  for (let i = 0; i < len; i++) {
    if (answer[len - i - 1] === 1) {
      print_answer += `${i} `;
    }
  }
  console.log(print_answer);
}
