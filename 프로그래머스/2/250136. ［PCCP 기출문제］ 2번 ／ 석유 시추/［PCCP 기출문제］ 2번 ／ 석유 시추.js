function BFS(land, visited, gas_num, s_row, s_col, N, M) {
  const dr = [0, 1, 0, -1];
  const dc = [1, 0, -1, 0];
  let queue = [[s_row, s_col]];
  visited[s_row][s_col] = true;

  let gas_size = 0;
  while (queue.length !== 0) {
    let [row, col] = queue.shift();
    land[row][col] = gas_num;
    gas_size += 1;
    for (let i = 0; i < 4; i++) {
      let [nrow, ncol] = [row + dr[i], col + dc[i]];
      if (0 <= nrow && nrow < N && 0 <= ncol && ncol < M && !visited[nrow][ncol] && land[nrow][ncol] === 1) {
        queue.push([nrow, ncol]);
        visited[nrow][ncol] = true;
      }
    }
  }
  return gas_size;
}
function solution(land) {
  const [N, M] = [land.length, land[0].length];

  // #1. land를 gas_num로 바꾸기
  let visited = Array.from(new Array(N), () => new Array(M).fill(false));
  let gas_sizes = {};

  let gas_num = 2;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (!visited[row][col] && land[row][col] === 1) {
        const gas_size = BFS(land, visited, gas_num, row, col, N, M);
        gas_sizes[gas_num] = gas_size;
        gas_num += 1;
      }
    }
  }
  // for (const lands of land) {
  //   console.log(lands);
  // }

  // #2. 각 Col에 대해 !0, !1인 것들을 최대 1번씩 더하기
  let max_gas = 0;
  for (let col = 0; col < M; col++) {
    const gases = new Set();
    for (let row = 0; row < N; row++) {
      const val = land[row][col];
      if (val !== 0 && !gases[val]) {
        gases.add(val);
      }
    }
    let sum_gas = 0;
    // console.log(gases);

    for (const gas_num of [...gases]) {
      sum_gas += gas_sizes[gas_num];
    }
    // console.log(sum_gas);

    max_gas = Math.max(max_gas, sum_gas);
  }
  return max_gas;
}