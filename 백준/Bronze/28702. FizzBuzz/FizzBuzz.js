const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

/**
 * 3개 단위로 무조건 숫자가 하나는 있으므로, 거기에 해당하는 숫자 값과 순서를 구하고
 * 이를 토대로, 다음 숫자를 구해낸다
 *
 * 이후, 이 숫자를 출력한다
 */
let num, order;

for (const [index, input] of inputs.entries()) {
  if (input !== "FizzBuzz" && input !== "Fizz" && input !== "Buzz") {
    num = Number(input);
    order = index;
  }
}
// console.log(num, order);

let answer = num + (3 - order);
// 정답 출력
if (answer % 3 === 0) {
  if (answer % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log("Fizz");
  }
} else {
  if (answer % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(answer);
  }
}
