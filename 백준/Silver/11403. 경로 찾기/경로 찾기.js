// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(inputs[0]);
const graph = {};
for (let row = 0; row < N; row++) {
  const arr = inputs[1 + row].split(" ").map(Number);
  for (const [index, elm] of arr.entries()) {
    if (elm === 1) {
      if (!graph[row]) graph[row] = [];
      graph[row].push(index);
    }
  }
}
// console.log(graph);

const solution = (graph, N) => {
  const board = Array.from(new Array(N), () => new Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    // console.log("Testing node: ", i);

    // BFS
    const queue = [];
    const visited = new Set();
    queue.push(i);

    while (queue.length) {
      const value = queue.shift();

      if (graph[value]) {
        for (const node of graph[value]) {
          if (!visited.has(node)) {
            queue.push(node);
            visited.add(node);
          }
        }
      }
    }
    // console.log(visited);
    for (const elm of [...visited]) {
      board[i][elm] = 1;
    }
    // console.log();
  }

  return board;
};

const answer = solution(graph, N);
for (let row = 0; row < N; row++) {
  console.log(answer[row].join(" "));
}
