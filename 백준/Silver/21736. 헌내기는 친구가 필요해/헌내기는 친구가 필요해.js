// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

// N (Row, 세로), M (Col, 가로)
const [N, M] = inputs[0].split(" ").map(Number);

let tRow, tCol;
const board = [];
for (let row = 0; row < N; row++) {
  const arr = inputs[1 + row].split("");
  for (let col = 0; col < M; col++) {
    if (tRow === undefined && arr[col] === "I") {
      tRow = row;
      tCol = col;
    }
  }
  board.push(arr);
}
// console.log(board);
// console.log(tRow, tCol);

// > 아래
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

const visited = Array.from(new Array(N), () => new Array(M).fill(false));

let answer = 0;
const queue = [[tRow, tCol]];
visited[tRow][tCol] = true;
while (queue.length !== 0) {
  const [row, col] = queue.shift();
  if (board[row][col] === "P") answer += 1;

  for (let i = 0; i < 4; i++) {
    const nRow = row + dr[i];
    const nCol = col + dc[i];

    if (
      0 <= nRow &&
      nRow < N &&
      0 <= nCol &&
      nCol < M &&
      !visited[nRow][nCol] &&
      board[nRow][nCol] !== "X"
    ) {
      queue.push([nRow, nCol]);
      visited[nRow][nCol] = true;
    }
  }
}

answer = answer === 0 ? "TT" : answer;
console.log(answer);
