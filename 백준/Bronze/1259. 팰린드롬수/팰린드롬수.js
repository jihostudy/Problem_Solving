const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

/**
 * 투 포인터로 left, right로 검사 시작
 * left > right가 될때까지 수행
 */
const checkPalindrome = (number) => {
  const arr = String(number).split("");
  const length = arr.length;

  let isPalindrome = true;
  let [left, right] = [0, length - 1];
  while (left <= right) {
    // console.log("checking left : ", arr[left], "right : ", arr[right]);

    if (arr[left] !== arr[right]) {
      isPalindrome = false;
      break;
    }
    left += 1;
    right -= 1;
  }

  return isPalindrome;
};

for (const input of inputs) {
  if (Number(input) === 0) {
    break;
  }
  if (checkPalindrome(input) === true) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
