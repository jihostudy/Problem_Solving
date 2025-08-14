// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M, B] = inputs[0].split(" ").map(Number);

const board = [];

// 여유 블록으로 해당 판을 만들 수 있는 여부
const can_build = (board, N, M, leftOver, number) => {
  let left = leftOver;
  // console.log("최초 남은 개수: ", left);
  // console.log("만들고자 하는 높이: ", number);

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      left += board[row][col] - number;
    }
  }

  // console.log("최종 남은 개수: ", left);

  return left >= 0 ? true : false;
};

const get_time = (board, N, M, height) => {
  let time = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      const curr_height = board[row][col];
      const diff = curr_height - height;
      // 블록 제거
      if (diff > 0) {
        time += diff * 2;
      }
      // 블록 추가
      else {
        time += Math.abs(diff);
      }
    }
  }
  return time;
};

const solution = (board, N, M) => {
  let [min, max] = [Infinity, -Infinity];
  for (let i = 0; i < N; i++) {
    const arr = inputs[1 + i].split(" ").map(Number);
    for (const val of arr) {
      min = Math.min(min, val);
      max = Math.max(max, val);
    }
    board.push(arr);
  }

  // console.log("min: ", min, "max: ", max);

  let answer = []; // [모든 땅을 고르는데 걸리는 시간, 땅의 높이]
  // 모두 높이가 같은 경우
  if (min === max) {
    answer = [0, min];
    return answer;
  }

  // 1. 가능한 땅 높이 범위 구하기
  let start = min;
  let end = start;
  while (can_build(board, N, M, B, end) && end <= max) {
    // console.log("높이 ", end, "에서는 만들 수 있음");
    end += 1;
  }
  end -= 1;
  // console.log(start, end);

  // 2. 최소 시간이 걸리는 땅의 높이 구하기
  let curr_height = start;

  let [min_height, time] = [curr_height, Infinity];

  while (curr_height <= end) {
    // console.log("현재 높이: ", curr_height);

    const time_value = get_time(board, N, M, curr_height);
    // console.log("거릴는 시간 : ", time_value);

    if (time >= time_value) {
      time = time_value;
      min_height = curr_height;
    }
    curr_height += 1;
  }
  return [time, min_height];
};

console.log(solution(board, N, M).join(" "));
