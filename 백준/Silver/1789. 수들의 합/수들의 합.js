const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();

const S = parseInt(input);

let [curr, next] = [0, 1];
let answer = 0;

// 범위에 있지 않은 동안 반복
while (!(curr <= S && S < next)) {
  answer += 1;
  curr += answer;
  next += answer + 1;

  // console.log("curr: ", curr, "next: ", next);
  // console.log("answer: ", answer);
}
console.log(answer);
