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

// arr 2차원 배열이 같은 숫자로 이루어져 있는지 판단하는 함수
const is_same_color = (array) => {
  const length = array.length;
  const first = array[0][0];

  let isSame = true;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[i][j] !== first) {
        isSame = false;
        break;
      }
    }
  }
  return isSame;
};

// arr 배열에 하얀색과 파란색 영역의 개수를 구하는 함수
const find_color_parts = (array) => {
  // console.log("array: ", array);

  const length = array.length; // 너비
  const size = length ** 2; // 전체 개수
  const middle = length / 2;

  let [white, black] = [0, 0];

  // 모두 다른 색 : 4개로 분할
  if (!is_same_color(array)) {
    // find_color_parts(array1)의 white, black 개수
    let temp;
    const array1 = [];
    for (let row = 0; row < middle; row++) {
      temp = [];
      for (let col = 0; col < middle; col++) {
        temp.push(array[row][col]);
      }
      array1.push(temp);
    }
    const [w1, b1] = find_color_parts(array1);

    // find_color_parts(array2)의 white, black 개수
    const array2 = [];
    for (let row = 0; row < middle; row++) {
      temp = [];
      for (let col = middle; col < length; col++) {
        temp.push(array[row][col]);
      }
      array2.push(temp);
    }
    const [w2, b2] = find_color_parts(array2);

    // find_color_parts(array3)의 white, black 개수
    const array3 = [];
    for (let row = middle; row < length; row++) {
      temp = [];
      for (let col = 0; col < middle; col++) {
        temp.push(array[row][col]);
      }
      array3.push(temp);
    }
    const [w3, b3] = find_color_parts(array3);

    // find_color_parts(array4)의 white, black 개수
    const array4 = [];
    for (let row = middle; row < length; row++) {
      temp = [];
      for (let col = middle; col < length; col++) {
        temp.push(array[row][col]);
      }
      array4.push(temp);
    }
    const [w4, b4] = find_color_parts(array4);

    white += w1 + w2 + w3 + w4;
    black += b1 + b2 + b3 + b4;
  }

  // 모두 같은 색
  else {
    const value = array[0][0];
    if (value === 0) {
      white += 1;
    } else {
      black += 1;
    }
  }
  return [white, black];
};

const [answer_white, answer_black] = find_color_parts(arr);
console.log(answer_white, answer_black);
