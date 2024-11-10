function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const len = A.length;
  let answer = 0;
  for (let i = 0; i < len; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
