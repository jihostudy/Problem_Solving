const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split(" ").map(Number);

const [N, trow, tcol] = inputs;

// DP 지수승
const dp = [1];
for (let i = 1; i <= N; i++) {
  dp[i] = dp[i - 1] * 2;
}

let answer = 0;

/**
 *
 * @param {*} rol 시작 Row
 * @param {*} col 시작 Col
 * @param {*} depth 현재 N
 */
const add_position_before = (row, col, depth) => {
  // 종료 조건
  if (depth === 0) {
    return;
  }

  // 4사분면중 어디 영역에 있는지 확인
  const length = dp[depth];
  const mid = length / 2;

  let sum = 0; // 사분면 누적
  let area = 0;
  // 제1사분면
  if (row <= trow && trow < row + mid && col <= tcol && tcol < col + mid) {
    area = 1;
  }
  // 제2사분면
  if (
    row <= trow &&
    trow < row + mid &&
    col + mid <= tcol &&
    tcol < col + length
  ) {
    sum = 1;
    area = 2;
  }

  // 제3사분면
  if (
    row + mid <= trow &&
    trow < row + length &&
    col <= tcol &&
    tcol < col + mid
  ) {
    sum = 2;
    area = 3;
  }
  // 제4사분면
  if (
    row + mid <= trow &&
    trow < row + length &&
    col + mid <= tcol &&
    tcol < col + length
  ) {
    sum = 3;
    area = 4;
  }

  answer += sum * (mid * mid);
  switch (area) {
    case 1:
      add_position_before(row, col, depth - 1);
      break;
    case 2:
      add_position_before(row, col + mid, depth - 1);
      break;
    case 3:
      add_position_before(row + mid, col, depth - 1);
      break;
    case 4:
      add_position_before(row + mid, col + mid, depth - 1);
      break;
  }
};

add_position_before(0, 0, N);

console.log(answer);
