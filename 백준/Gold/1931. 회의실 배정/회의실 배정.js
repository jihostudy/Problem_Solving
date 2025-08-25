// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(inputs[0]);
const numbers = [];
for (let i = 0; i < N; i++) {
  numbers.push(inputs[1 + i].split(" ").map(Number));
}

const solution = (times, N) => {
  times.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let curr = 0;
  let answer = 0;

  times.forEach((time) => {
    const [s, e] = time;
    if (curr <= s) {
      answer += 1;
      curr = e;
    }
  });
  return answer;
};
console.log(solution(numbers, N));