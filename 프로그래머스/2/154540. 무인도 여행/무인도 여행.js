function BFS(maps, visited, s_row, s_col, N, M) {
  // row,col에서 연결된 값들 더하기
  let cnt = 0;
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];

  let queue = [[s_row, s_col]]; // [row,col]
  visited[s_row][s_col] = true;
  while (queue.length !== 0) {
    const [row, col] = queue.shift();
    cnt += parseInt(maps[row][col]); // 값 더하기

    for (let i = 0; i < 4; i++) {
      const nrow = row + dr[i];
      const ncol = col + dc[i];
      if (0 <= nrow && nrow < N && 0 <= ncol && ncol < M && !visited[nrow][ncol] && maps[nrow][ncol] !== 'X') {
        queue.push([nrow, ncol]);
        visited[nrow][ncol] = true;
      }
    }
  }
  return cnt;
}
function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  let visited = Array.from(new Array(N), () => new Array(M).fill(false));

  let answer = [];
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (!visited[row][col] && maps[row][col] !== 'X') {
        answer.push(BFS(maps, visited, row, col, N, M));
      }
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}