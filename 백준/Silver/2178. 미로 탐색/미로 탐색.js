const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((subarr) => subarr.trim().split(""));
// # 방향 변수
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];

const queue = [[0, 0, 1]];
let visited = Array.from(new Array(N), () => new Array(M).fill(false));
visited[0][0] = true;
let min = -1;

while (queue.length) {
  const [row, col, cnt] = queue.shift();

  // # 도착 지점 도달
  if (row === N - 1 && col === M - 1) {
    min = min === -1 ? cnt : Math.min(min, cnt);
  }
  // # 도착 지점 이동중
  else {
    let i = 0;
    for (i; i < 4; i++) {
      const [nrow, ncol] = [row + dr[i], col + dc[i]];
      if (
        nrow >= 0 &&
        nrow < N &&
        ncol >= 0 &&
        ncol < M &&
        arr[nrow][ncol] === "1" &&
        !visited[nrow][ncol]
      ) {
        queue.push([nrow, ncol, cnt + 1]);
        visited[nrow][ncol] = true;
      }
    }
  }
}
console.log(min);
