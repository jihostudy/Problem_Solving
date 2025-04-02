function getSum(arr) {
  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}
// 문제(골드5) https://www.acmicpc.net/problem/2504
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim();

const arr = input.split("");

const len = arr.length; // 총 문자 개수

const stack = [];
let isError = false;
for (let i = 0; i < len; i++) {
  const elm = arr[i];
  // console.log(i, "번째 요소를 테스트합니다");

  // console.log("elm: ", elm);

  if (stack.length === 0) {
    stack.push(elm);
    // console.log("1실행 이후 stack: ", stack, "\n");
    continue;
  } else if (elm === "(" || elm === "[") {
    stack.push(elm);
    // console.log("2실행 이후 stack: ", stack, "\n");
    continue;
  }

  // #1. 스택의 왼쪽으로 가면서
  // 나오는 모든 숫자 값들을 구하기, 처음 나오는 문자의 index(target) 구하기

  const stackCount = stack.length;

  const numbers = [];
  let isExist = false;
  let target;
  for (target = stackCount - 1; target >= 0; target--) {
    if (stack[target] === "(" || stack[target] === "[") {
      isExist = true;
      break;
    }
    // 숫자 값들은 저장해두기
    else {
      numbers.push(stack[target]);
    }
  }
  // console.log("target: ", target);
  // console.log("numbers: ", numbers);
  // console.log("isExist: ", isExist);

  // 문자가 없는 경우
  if (!isExist) {
    stack.push(elm);
  } else {
    // ()로 만들어지는 경우
    if (elm === ")" && stack[target] === "(") {
      if (numbers.length === 0) {
        stack.pop();
        stack.push(2);
      } else {
        for (let k = 0; k < numbers.length + 1; k++) {
          stack.pop();
        }
        stack.push(2 * getSum(numbers));
      }
    }
    // []로 만들어지는 경우
    else if (elm === "]" && stack[target] === "[") {
      if (numbers.length === 0) {
        stack.pop();
        stack.push(3);
      } else {
        for (let k = 0; k < numbers.length + 1; k++) {
          stack.pop();
        }
        stack.push(3 * getSum(numbers));
      }
    }
    // 안만들어지는 경우 (오류)
    else {
      isError = true;
      break;
    }
  }
  // console.log("실행 이후 stack: ", stack, "\n");
}
// 마지막에 문자인 경우
if (
  stack.includes("(") ||
  stack.includes("[") ||
  stack.includes("]") ||
  stack.includes(")")
)
  isError = true;
isError ? console.log(0) : console.log(getSum(stack));
