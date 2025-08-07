const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim();

/**
 * 모르는 숫자 = 미지수 val
 * 그냥 값 더하면 되는ㄱ ㅓ아닌가
 */
const numbers = inputs.split("");

let isEven = false;
let m;
let add = 0;
for (const [index, num] of numbers.entries()) {
  if (num === "*") {
    isEven = index % 2 === 0 ? true : false;
    continue;
  }
  if (index === 12) {
    m = Number(num);
    continue;
  }
  if (index % 2 === 0) {
    add += Number(num);
  } else {
    add += Number(num) * 3;
  }
}
// console.log("isEven: ", isEven);
// console.log("m: ", m);
// console.log("addition: ", add);
/**
 * val : 0 ~ 9 사이의 숫자
 * 짝수 : add + val + m === 0 (mod 10)
 * 홀수 : add + 3 * val + m === 0 (mod 10)
 */
let answer;
for (let val = 0; val < 10; val++) {
  if (isEven) {
    // console.log(add + val + m);

    if ((add + val + m) % 10 === 0) {
      answer = val;
      break;
    }
  } else {
    // console.log(add + 3 * val + m);
    if ((add + 3 * val + m) % 10 === 0) {
      answer = val;
      break;
    }
  }
}
console.log(answer);
