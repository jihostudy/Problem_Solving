// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);

const answers = [];
const recursive = (accumulate, start) => {
  // 종료 조건
  if (accumulate.length === M) {
    answers.push(accumulate);
    return;
  }

  // 반복
  for (let i = start; i <= N; i++) {
    recursive([...accumulate, i], i);
  }
};

recursive([], 1);

// console.log(answers);

// 정답 출력
for (const answer of answers) {
  let ans = "";
  for (const elm of answer) {
    ans += elm + " ";
  }
  console.log(ans);
}
