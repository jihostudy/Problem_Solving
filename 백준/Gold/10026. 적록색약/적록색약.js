// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(inputs[0]);
const board = [];
for (let i = 0; i < N; i++) {
  board.push(inputs[i + 1].split(""));
}

const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

const BFS = (visited, color, sr, sc, isSakYak) => {
  const queue = [];

  queue.push([sr, sc]);
  visited[sr][sc] = true;

  while (queue.length !== 0) {
    const [row, col] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nr = row + dr[i];
      const nc = col + dc[i];
      if (0 <= nr && nr < N && 0 <= nc && nc < N && !visited[nr][nc]) {
        // 색약이 아닌 경우
        if (isSakYak === false) {
          if (board[nr][nc] === color) {
            queue.push([nr, nc]);
            visited[nr][nc] = true;
          }
        }
        // 색약인 경우
        else {
          if (color === "R" || color === "G") {
            if (board[nr][nc] === "R" || board[nr][nc] === "G") {
              queue.push([nr, nc]);
              visited[nr][nc] = true;
            }
          } else {
            if (board[nr][nc] === color) {
              queue.push([nr, nc]);
              visited[nr][nc] = true;
            }
          }
        }
      }
    }
  }
  return 0;
};

const solution = () => {
  let answer = [0, 0, 0]; // [Red, Blue, Green]
  const visited = Array.from(new Array(N), () => new Array(N).fill(false));

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (visited[row][col] === false) {
        const color = board[row][col];
        if (color === "R") answer[0] += 1;
        else if (color === "B") answer[1] += 1;
        else if (color === "G") answer[2] += 1;

        BFS(visited, color, row, col, false);
      }
    }
  }
  return answer[0] + answer[1] + answer[2];
};

const sakyakSolution = () => {
  let answer = [0, 0]; // [Red + Green, Blue, Green]
  const visited = Array.from(new Array(N), () => new Array(N).fill(false));

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (visited[row][col] === false) {
        const color = board[row][col];
        if (color === "R" || color === "G") answer[0] += 1;
        else if (color === "B") answer[1] += 1;

        BFS(visited, color, row, col, true);
      }
    }
  }
  return answer[0] + answer[1];
};

/**
 * visited를 순회하며, not visited에 대해
 * BFS (board,visited, 초기값, isSakYak):
 * if 문을 isSakYak = true/false 여부에 따라 다르게 설정하여 구성
 */
console.log(solution());
console.log(sakyakSolution());
