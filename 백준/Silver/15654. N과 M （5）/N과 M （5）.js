// const seta = new Set();
// seta.add(1);
// console.log(seta);
// console.log([...seta]);

// console.log(new Set([...seta, 2]));

// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
const numbers = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answers = [];
const recursive = (accumulate, used_index_set) => {
  // console.log(accumulate, used_index_set);

  // 종료 조건
  if (accumulate.length === M) {
    answers.push(accumulate);
    return;
  }

  // 반복
  for (let i = 0; i < N; i++) {
    if (!used_index_set.has(i)) {
      const new_used_index_set = new Set([...used_index_set, i]);
      recursive([...accumulate, numbers[i]], new_used_index_set);
    }
  }
};

const used_map = new Set();
recursive([], used_map);

// console.log(answers);

// 정답 출력
for (const answer of answers) {
  let ans = "";
  for (const elm of answer) {
    ans += elm + " ";
  }
  console.log(ans);
}
