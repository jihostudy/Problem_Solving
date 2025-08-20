// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = inputs[0].split(" ").map(Number);
// console.log(N, K);

const solution = (init, target) => {
  // BFS
  let queue = [];
  const visited = new Set(); // 방문 여부

  queue.push([init, 0]);
  visited.add(init);

  while (queue.length !== 0) {
    const [value, time] = queue.shift();

    // 종료 조건
    if (value === target) {
      return time;
    }

    // 삽입
    for (next of [value - 1, value + 1, value * 2]) {
      if (!visited.has(next) && next >= 0 && next <= 100000) {
        visited.add(next);
        queue.push([next, time + 1]);
      }
    }
  }
};

console.log(solution(N, K));
