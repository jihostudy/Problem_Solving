const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [n, numbersArray, operatorsArray] = input;

const N = parseInt(n);
const numbers = numbersArray.split(" ").map(Number);
const operators = operatorsArray.split(" ").map(Number);

let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

/**
 * 연산자와 숫자로 연산 결과를 구하기
 * @param {*} numbers
 * @param {*} operations
 */
const calculateValue = (numbers, operations) => {
  const numbers_copy = [...numbers];
  for (const operator of operations) {
    const v1 = numbers_copy.shift();
    const v2 = numbers_copy.shift();
    let value;
    switch (operator) {
      // +
      case 0:
        value = v1 + v2;
        break;
      // -
      case 1:
        value = v1 - v2;
        break;
      // *
      case 2:
        value = v1 * v2;
        break;
      // /
      case 3:
        // console.log("나눗셈 시작 값: ", v1, v2);

        // C++ 규칙
        value = ~~(v1 / v2);
        // console.log("value: ", value);

        break;
    }
    numbers_copy.unshift(value);
  }
  return numbers_copy[0];
};

/**
 * @param {*} opCount : 몇번쨰 연산자?
 * @param {*} left_op : 남은 연산자
 * @param {*} selected_op : 선택한 연산자 순서
 */
const recursive = (opCount, left_op, selected_op) => {
  // 종료 조건
  if (opCount === N - 1) {
    // TODO: 계산 후최대 최소 갱신
    const value = calculateValue(numbers, selected_op);
    // console.log("selected_op: ", selected_op);
    // console.log("value: ", value);

    min = Math.min(value, min);
    max = Math.max(value, max);
    return;
  }
  const new_opCount = opCount + 1;
  for (let i = 0; i < 4; i++) {
    if (left_op[i] !== 0) {
      const new_selected_op = [...selected_op];
      new_selected_op.push(i);

      const new_left_op = [...left_op];
      new_left_op[i] -= 1;
      recursive(new_opCount, new_left_op, new_selected_op);
    }
  }
};

recursive(0, [...operators], []);

console.log(max);
console.log(min);
