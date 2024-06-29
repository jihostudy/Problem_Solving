
function solution(left, right) {
  let answer = 0;
  let i = left;
  for (i; i <= right; i++) {
    let j = 1;
    let cnt = 0;
    for (j; j <= i; j++) {
      if (i % j == 0) {
        cnt += 1;
      }
    }
    if (cnt % 2) answer -= i;
    else answer += i;
  }
  return answer;
}