function solution(weights) {
  // #1. 오름차순 정렬
  weights.sort((a, b) => a - b);

  // #2. 숫자별 횟수 구하기
  let weight_cnt = {};
  for (const weight of weights) {
    if (!weight_cnt[weight]) {
      weight_cnt[weight] = 1;
    } else {
      weight_cnt[weight] += 1;
    }
  }

  // #3. 회수 더하기
  let answer = 0;

  const multiply = [1.5, 2, 4 / 3];
  for (const weight of weights) {
    for (const mul of multiply) {
      const val = weight * mul;
      // 정수인 경우
      if (Number.isInteger(val) && weight_cnt[val]) {
        answer += weight_cnt[val];
      }
    }
  }

  for (const weight in weight_cnt) {
    // 같은게 있는 경우의 수
    const cnt = weight_cnt[weight];
    if (cnt !== 1) {
      answer += (cnt * (cnt - 1)) / 2;
    }
  }
  return answer;
}