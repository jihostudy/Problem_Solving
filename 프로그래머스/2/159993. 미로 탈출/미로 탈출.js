function DFS(arr, start, end, N, M) {
  const [e_row, e_col] = end;
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];
  let visited = Array.from(new Array(N), () => new Array(M).fill(false));

  let queue = [[...start, 0]]; // [row,col,cnt(거리)]
  visited[start[0]][start[1]] = true;
  while (queue.length !== 0) {
    let [row, col, cnt] = queue.shift();

    if (row === e_row && col === e_col) {
      return cnt;
    }

    for (let i = 0; i < 4; i++) {
      const nrow = row + dr[i];
      const ncol = col + dc[i];
      if (0 <= nrow && nrow < N && 0 <= ncol && ncol < M && arr[nrow][ncol] !== 'X' && !visited[nrow][ncol]) {
        queue.push([nrow, ncol, cnt + 1]);
        visited[nrow][ncol] = true;
      }
    }
  }
  return -1;
}
function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  let start, labber, end;
  const arr = Array.from(new Array(N), () => new Array(M));
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      // 시작점
      if (maps[row][col] === 'S') {
        start = [row, col];
      }
      // 끝점
      else if (maps[row][col] === 'E') {
        end = [row, col];
      } else if (maps[row][col] === 'L') {
        labber = [row, col];
      }
      arr[row][col] = maps[row][col];
    }
  }

  let answer = 0;
  // #1. start -> labber 최단 거리 구하기
  const min_to_labber = DFS(arr, start, labber, N, M);
  if (min_to_labber === -1) {
    return -1;
  }
  answer += min_to_labber;

  // #2. labber -> end 최단 거리 구하기
  const min_to_end = DFS(arr, labber, end, N, M);
  if (min_to_end === -1) {
    return -1;
  }
  answer += min_to_end;

  return answer;
}