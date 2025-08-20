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
    if (value + 1 <= 100000 && !visited.has(value + 1)) {
      queue.push([value + 1, time + 1]);
      visited.add(value + 1);
    }
    if (value * 2 <= 100000 && !visited.has(value * 2)) {
      queue.push([value * 2, time + 1]);
      visited.add(value * 2);
    }
    if (value - 1 >= 0 && !visited.has(value - 1)) {
      queue.push([value - 1, time + 1]);
      visited.add(value - 1);
    }
  }
};

console.log(solution(N, K));
