// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(inputs[0]);
const length = Number(inputs[1]);
const letters = inputs[2].split("");

// console.log(letters);

const arr = new Array(length).fill(0);
let answer = 0;

for (let i = 0; i < length; i++) {
  // console.log("testing index: ", i);

  const letter = letters[i];
  if (letter === "O") {
    continue;
  } else if (letter === "I") {
    // 정답 계산
    if (arr[i] >= N) {
      answer += 1;
      // console.log("정답 더함");
    }
    // arr 계산
    if (i + 1 < length) {
      const next_letter = letters[i + 1];
      if (next_letter === "O") {
        arr[i + 1] = arr[i];
        // console.log("연속");

        if (i + 2 < length) {
          arr[i + 2] = arr[i] + 1;
        }
      }
    }
  }
  // console.log(arr);

  // console.log();
}
// console.log(arr);

console.log(answer);
