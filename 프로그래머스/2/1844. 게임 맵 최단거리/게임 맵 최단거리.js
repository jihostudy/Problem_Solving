function solution(maps) {
  const [N, M] = [maps.length, maps[0].length];

  // BFS로 최단거리 찾기
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  const queue = [];
  const visited = Array.from(Array(N), () => Array(M).fill(false));

  queue.push([0, 0, 1]);
  visited[0][0] = true;

  let cnt = 0;
  while (queue.length != 0) {
    const [row, col, len] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nrow, ncol, nlen] = [row + dr[i], col + dc[i], len + 1];

      if (
        0 <= nrow &&
        nrow < N &&
        0 <= ncol &&
        ncol < M &&
        visited[nrow][ncol] == false &&
        maps[nrow][ncol] == 1
      ) {
        if (nrow == N - 1 && ncol == M - 1) {
          return nlen;
        }
        queue.push([nrow, ncol, nlen]);
        visited[nrow][ncol] = true;
      }
    }
    cnt += 1;
    // console.log(cnt, "번 방문후 queue: ", queue);
  }
  return -1;
}