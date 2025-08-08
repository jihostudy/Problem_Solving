/**
 * 교훈
 * 재귀 문제를 풀때, 배열만 인자로 넘기는게 아니라, 어떤 인자를 더 넘겨주면 훨씬 간단해지는지를 잘 생각해보기
 *
 * 해당 문제의 경우에는 (시작row, 끝나는row, 길이) 해당 3가지를 인자로 넘겨주면 재귀가 훨씬 간단해졌음.
 */

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

/**
 * N : 2, 4, 8, 16, 32, 64, 128 중 하나
 * 하얀색 -> 0
 * 파란색 -> 1
 *
 * 하얀색 + 파랜색 각 개수 구하기
 *
 * boolean function is_same_color(arr): -> arr 2차원 배열이 같은 숫자로 이루어져 있는지 판단하는 함수
 *
 * 재귀
 * function find_color_parts(arr): -> arr 배열에 하얀색과 파란색 영역의 개수를 구하는 함수
 */
const N = Number(inputs[0]);
const arr = inputs.slice(1, N + 1).map((array) => array.split(" ").map(Number));

let [white, black] = [0, 0];

// arr 2차원 배열이 같은 숫자로 이루어져 있는지 판단하는 함수
const is_same_color = (row, col, length) => {
  const first = arr[row][col];

  let isSame = true;
  for (let i = row; i < row + length; i++) {
    for (let j = col; j < col + length; j++) {
      if (arr[i][j] !== first) {
        isSame = false;
        break;
      }
    }
  }
  return isSame;
};

/**
 * row, col로 시작해서 크기가 length인 부분의 영역의 개수를 구하는 함수
 */
const find_color_parts = (row, col, length) => {
  const size = length ** 2; // 전체 개수

  // 모두 같은 색
  if (is_same_color(row, col, length)) {
    const value = arr[row][col];
    if (value === 0) {
      white += 1;
    } else {
      black += 1;
    }
    return;
  }

  const mid = length / 2;
  find_color_parts(row, col, mid);
  find_color_parts(row, col + mid, mid);
  find_color_parts(row + mid, col, mid);
  find_color_parts(row + mid, col + mid, mid);
};

find_color_parts(0, 0, N);
console.log(white);
console.log(black);
