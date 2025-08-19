// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

// N(세로), M(가로)
const [N, M] = inputs[0].split(" ").map(Number);
const board = [];
for (let row = 0; row < N; row++) {
  board.push(inputs[1 + row].split(" ").map(Number));
}

const origins = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
];

// 길이 N의 정사각형에서 해당 위상들 돌리기
const rotate_clockwise = (origins, N) => {
  const answer = [];
  for (const origin of origins) {
    const [row, col] = origin;
    answer.push([col, N - 1 - row]);
  }
  return answer;
};

// 길이 N의 정사각형에서 위상들 뒤집기
const flip = (origins, N) => {
  const answer = [];
  for (const origin of origins) {
    const [row, col] = origin;
    answer.push([N - 1 - row, col]);
  }
  return answer;
};

// N(세로), M(가로)
const get_max_sum = (origins, board, N, M) => {
  let max = -Infinity;
  for (let row = -3; row < N; row++) {
    for (let col = -3; col < M; col++) {
      let sum = 0;
      let isWithin = true;
      for (const origin of origins) {
        const nr = row + origin[0];
        const nc = col + origin[1];
        if (0 <= nr && nr < N && 0 <= nc && nc < M) {
          sum += board[nr][nc];
        } else {
          isWithin = false;
          break;
        }
      }
      if (isWithin) {
        max = Math.max(max, sum);
      }
    }
  }
  return max;
};

const positions = [];
let cnt = 0;

let max = -Infinity;
for (const origin of origins) {
  cnt += 1;
  // console.log(cnt, "번쟤 오리진");

  const all = [];
  // 1. 90도씩 3번 회전해서 위상 넣기
  all.push(origin);
  let temp = [...origin];
  for (let i = 0; i < 3; i++) {
    const rotated_origin = rotate_clockwise(temp, 4);
    temp = [...rotated_origin];
    all.push(rotated_origin);
  }
  // console.log("뒤집은 것들");
  // console.log(all);

  // 2. 4개의 origin에 대하여 y축 뒤집기
  for (let i = 0; i < 4; i++) {
    const fliped_origin = flip(all[i], 4);
    all.push(fliped_origin);
  }

  // 겹치는거 제거하기

  // console.log(all);
  // console.log();

  // 최종 합치기
  for (const origin of all) {
    const temp_max = get_max_sum(origin, board, N, M);
    max = Math.max(max, temp_max);
  }
}

console.log(max);
