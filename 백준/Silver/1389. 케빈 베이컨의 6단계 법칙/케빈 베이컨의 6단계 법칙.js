// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// N(노드 수, 1 부터 시작), M(간선 수)
const [N, M] = inputs[0].split(" ").map(Number);
// console.log(N, M);

// 최단 거리의 합이 가장 작은 노드의 번호

/**
 * 0 ~ N-1 번 노드로 구한 후 정답 출력시 + 1
 */
const board = Array.from(new Array(N), () => new Array(N).fill(Infinity));
for (let i = 0; i < N; i++) {
  board[i][i] = 0;
}

// 입력
for (let i = 0; i < M; i++) {
  const [start, end] = inputs[i + 1].split(" ").map(Number);
  board[start - 1][end - 1] = 1;
  board[end - 1][start - 1] = 1;
}

// 플로이드-워셜 알고리즘
// 경유지
for (let k = 0; k < N; k++) {
  // 출발지점
  for (let i = 0; i < N; i++) {
    // 도착지점
    for (let j = 0; j < N; j++) {
      if (board[i][k] === Infinity || board[k][j] === Infinity) {
        continue;
      }
      board[i][j] = Math.min(board[i][j], board[i][k] + board[k][j]);
    }
  }
}
const arr = new Array(N);
for (let row = 0; row < N; row++) {
  const sum = board[row].reduce((prev, curr) => prev + curr, 0);
  arr[row] = {
    sum,
    node: row + 1,
  };
}
arr.sort((a, b) => {
  if (a.sum === b.sum) {
    return a.node - b.node;
  }
  return a.sum - b.sum;
});
// console.log(arr);
console.log(arr[0].node);
