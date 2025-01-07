// nrow,ncol에서 dr, dc방향으로 이동할 때 걸리는 마지막 위치
function moveBoard(arr, row, col, dr, dc, N, M, visited) {
  // console.log('row:', row, 'col: ', col);
  // console.log('drow: ', dr, 'dcol:', dc);

  let curr_row = row;
  let curr_col = col;
  while (true) {
    // 가로 방향
    if (dr === 0) {
      visited[curr_row][curr_col][0] = true;
    }
    // 세로 방향
    else if (dc === 0) {
      visited[curr_row][curr_col][1] = true;
    }
    const next_row = curr_row + dr;
    const next_col = curr_col + dc;
    if (0 <= next_row && next_row < N && 0 <= next_col && next_col < M && arr[next_row][next_col] !== 'D') {
      curr_row = next_row;
      curr_col = next_col;
    }
    // 이동 불가
    else {
      break;
    }
  }

  return [curr_row, curr_col];
}
function solution(board) {
  // #1. start, end 위치 찾기
  let arr = [];
  let start = null;
  let end = null;
  for (const [row, elm] of board.entries()) {
    arr.push(elm.split(''));
    for (let col = 0; col < elm.length; col++) {
      if (elm[col] === 'G') {
        end = [row, col];
      }
      if (elm[col] === 'R') {
        start = [row, col];
      }
    }
  }

  const N = arr.length; // row
  const M = arr[0].length; //col

  // #2. BFS
  let answer;
  let visited = Array.from(new Array(N), () => Array.from(new Array(M), () => new Array(2).fill(false)));

  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  const queue = [[...start, 0]]; // [row,col,cnt]
  while (queue.length !== 0) {
    // console.log('queue:', queue);
    const [row, col, cnt] = queue.shift();
    // console.log(row, col, cnt);
    // Case0: 종료 조건
    if (row === end[0] && col === end[1]) {
      answer = cnt;
      break;
    }

    // Case1: 가로 방향
    if (!visited[row][col][0]) {
      for (let i = 0; i < 2; i++) {
        const nrow = row + dr[i];
        const ncol = col + dc[i];
        if (0 <= nrow && nrow < N && 0 <= ncol && ncol < M) {
          // #1. 이동한 위치 queue에 넣기
          const [moved_row, moved_col] = moveBoard(arr, row, col, dr[i], dc[i], N, M, visited);
          queue.push([moved_row, moved_col, cnt + 1]);
          // console.log('adding : ', [moved_row, moved_col, cnt + 1]);
          // console.log();
        }
      }
    }
    // Case2: 세로 방향
    if (!visited[row][col][1]) {
      for (let i = 0; i < 2; i++) {
        const nrow = row + dr[i + 2];
        const ncol = col + dc[i + 2];
        if (0 <= nrow && nrow < N && 0 <= ncol && ncol < M) {
          // #1. 이동한 위치 queue에 넣기
          const [moved_row, moved_col] = moveBoard(arr, row, col, dr[i + 2], dc[i + 2], N, M, visited);
          queue.push([moved_row, moved_col, cnt + 1]);
          // console.log('adding : ', [moved_row, moved_col, cnt + 1]);
          // console.log();
        }
      }
    }
  }
  return answer ? answer : -1;
}