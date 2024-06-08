function solution(absolutes, signs) {
  let answer = 0;
  const length = absolutes.length;
  for (let i = 0; i < length; i++) {
    if (signs[i] === true) {
      answer += absolutes[i];
    } else {
      answer += -1 * absolutes[i];
    }
  }
  return answer;
}