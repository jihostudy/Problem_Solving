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

  let face = "front"; // "front" | "end"
  let isError = false;
  for (const command of commands) {
    // 값 추출
    if (command === "D") {
      // 에러 반환
      if (numbers.length === 0) {
        isError = true;
        break;
      } else if (face === "front") {
        numbers.shift();
      } else if (face === "end") {
        numbers.pop();
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
  if (face === "end") {
    numbers.reverse();
  }
  // console.log("최종 numbers:", numbers);
  // console.log();

  answers.push(numbers);
}
// console.log("1️⃣정답 출력");

for (const answer of answers) {
  if (answer === "error") console.log(answer);
  else console.log(JSON.stringify(answer));
}
