/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 1. 문자 필터하기
  const filtered = [...s.toLowerCase()]
    .filter((char) => /[a-z0-9]/.test(char))
    .join("");
  // console.log(filtered);

  // 2. palindrome 확인
  const len = filtered.length;

  let answer = true;
  let [left, right] = [0, len - 1];
  while (left < right) {
    // 동일 문자
    if (filtered[left] === filtered[right]) {
      left += 1;
      right -= 1;
    }
    // 다른 문자
    else {
      answer = false;
      break;
    }
  }
  return answer;
};

console.log(isPalindrome(" "));
