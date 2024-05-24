const solution = (answer) => {
  console.log(answer);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = 0; // 정답

rl.on("line", function (line) {
  // 로직 구현
  arr = line.split(" ").filter((word) => word !== "");

  rl.close();
}).on("close", function () {
  solution(arr.length); // 정답 출력
  process.exit();
});
