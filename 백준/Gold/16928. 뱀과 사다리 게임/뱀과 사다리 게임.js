// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// N(사다리 개수), M(뱀 개수)
const [N, M] = inputs[0].split(" ").map(Number);

const ladders = {}; // value -> key가 존재
for (let i = 0; i < N; i++) {
  const [from, to] = inputs[i + 1].split(" ").map(Number);
  ladders[from] = to;
}
// console.log("올림 화살표");
// console.log(ladders);

for (let i = 0; i < M; i++) {
  const [from, to] = inputs[i + 1 + N].split(" ").map(Number);
  ladders[from] = to;
}

const solution = (N, M, ladders) => {
  const dices = [1, 2, 3, 4, 5, 6];
  const queue = [];
  const visited = new Set();

  queue.push([1, 0]); // [노드, 시간]
  visited.add(1);

  // BFS
  let min = Infinity;
  while (queue.length !== 0) {
    // console.log(queue);
    const [node, time] = queue.shift();
    // 정답 출력
    if (node === 100) {
      min = Math.min(time, min);

      continue;
    }
    // 주사위로 가는 방법
    for (const dice of dices) {
      const next_node = node + dice;
      if (next_node <= 100 && !visited.has(next_node)) {
        // 화살표로 가는 방법
        if (ladders[next_node]) {
          const jump_node = ladders[next_node];
          if (!visited.has(jump_node)) {
            queue.push([jump_node, time + 1]);
            visited.add(jump_node);
          }
        } else {
          queue.push([next_node, time + 1]);
          visited.add(next_node);
        }
      }
    }
  }
  return min;
};
console.log(solution(N, M, ladders));

// const dp = new Array(100 + 1).fill(null);
// for (let i = 0; i <= 7; i++) dp[i] = 1; // 한번에 도착 가능

// const dice = [1, 2, 3, 4, 5, 6];
// const count = new Array(100 + 1).fill(0);

// const recursive = (number) => {
//   console.log("recusive of number: ", number);
//   count[number] += 1;

//   const candidates = [];
//   // 주사위로 가는 방법
//   for (const elm of dice) {
//     const value = number - elm;
//     if (value >= 1) {
//       if (dp[value] !== null) candidates.push(dp[value]);
//       else candidates.push(recursive(value));
//     }
//   }
//   // 올림 화살표로 가는 방법
//   if (ladders[number]) {
//     candidates.push(recursive(ladders[number]));
//   }
//   // 내림 화살표로 가는 방법
//   if (snakes[number]) {
//     candidates.push(recursive(snakes[number]));
//   }
//   const min = Math.min(...candidates) + 1;
//   dp[number] = min;

//   return min;
// };
// recursive(100);
