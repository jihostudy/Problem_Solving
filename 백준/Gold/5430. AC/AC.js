// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const testcase = Number(inputs[0]);

const answers = [];
for (let i = 0; i < testcase; i++) {
  const commands = inputs[1 + 3 * i].split("");
  const N = Number(inputs[2 + 3 * i]);
  let numbers =
    N !== 0 ? inputs[3 + 3 * i].slice(1, -1).split(",").map(Number) : [];
  // console.log(commands);
  // console.log(N);
  // console.log(numbers);

  let [left, right] = [0, N - 1];
  let face = "front"; // "front" | "end"
  let isError = false;
  for (const command of commands) {
    // console.log("testing command: ", command);
    // console.log("left,right ", left, right);

    // 에러 반환
    if (left > right) {
      if (command === "R") continue;
      isError = true;
    }
    // 값 추출
    else if (command === "D") {
      if (face === "front") {
        left += 1;
      } else if (face === "end") {
        right -= 1;
      }
    }
    // 방향 바꾸기
    else if (command === "R") {
      face = face === "front" ? "end" : "front";
    }
  }
  if (isError) {
    answers.push("error");
    continue;
  }
  const answer = numbers.slice(left, right + 1);
  if (face === "end") answer.reverse();
  answers.push(answer);
  // console.log();
}

for (const answer of answers) {
  if (answer === "error") console.log(answer);
  else console.log(JSON.stringify(answer));
}
