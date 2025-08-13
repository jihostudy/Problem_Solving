// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim();

// console.log(inputs);

const pow_dp = [1, 10, 10 ** 2, 10 ** 3, 10 ** 4];
const convert_to_number = (nums) => {
  // console.log(nums);

  const length = nums.length;

  nums.reverse();
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += Number(nums[i]) * pow_dp[i];
  }
  // console.log("adding number: ", sum);

  return sum;
};

// let arr = ["("];
let arr = [];

let nums = [];
let isNumCounting = false;
for (const input of inputs) {
  // 숫자인 경우
  if (0 <= input.charCodeAt(0) - 48 && input.charCodeAt(0) - 48 <= 9) {
    const number = Number(input);
    if (!isNumCounting) nums = []; // 초기화
    isNumCounting = true;

    nums.push(number);
    continue;
  }
  if (isNumCounting) {
    isNumCounting = false;
    arr.push(convert_to_number(nums));
  }

  // if (input === "+") {
  //   arr.push(input);
  // }
  if (input === "-") {
    // arr.push(")");
    arr.push("-");
    // arr.push("(");
  }
}
// 남은 숫자
if (isNumCounting) arr.push(convert_to_number(nums));
// arr.push(")");

// console.log(arr);

// 값 계산
let answer = 0;

let isSub = false;
let temp = 0;
for (const elm of arr) {
  if (elm === "-") {
    // 이전꺼 끝내기
    if (isSub) {
      answer -= temp;
      // console.log("subb: ", temp);

      temp = 0;
    }
    // 새로운거 시작
    isSub = true;
  } else {
    if (!isSub) {
      answer += elm;
      // console.log("adding: ", elm);
    }
    if (isSub) {
      temp += elm;
    }
  }
}
if (isSub) {
  answer -= temp;
  // console.log("subb: ", temp);
}
console.log(answer);
