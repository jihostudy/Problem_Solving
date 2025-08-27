// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim();

const [N, M] = inputs.split(" ").map(Number);
// console.log(N, M);

const answers = [];
const recursive = (value, acc) => {
  // console.log(value, acc);

  if (acc.length === M) {
    // console.log("정답");
    answers.push(acc);
    return;
  }
  // 종료
  if (value > N) {
    // console.log("무시");
    return;
  }

  const next_value = value + 1;
  recursive(next_value, [...acc]);
  recursive(next_value, [...acc, value]);
};
recursive(1, []);

// 정렬
// console.log(answers);

answers.sort((a, b) => {
  let index = 0;
  while (index < N && a[index] === b[index]) {
    index += 1;
  }
  if (index === N) {
    index -= 1;
  }
  return a[index] - b[index];
});

for (const answer of answers) {
  let tmp = "";
  for (const elm of answer) {
    tmp += elm;
    tmp += " ";
  }
  console.log(tmp);
}
