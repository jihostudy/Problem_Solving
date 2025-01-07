function solution(numbers) {
  const total_numbers = numbers.length;

  let answers = [];

  numbers.reverse();
  let max = 0;
  for (let [index, number] of numbers.entries()) {
    const answers_cnt = answers.length;

    // Case1: -1 탐지 조건 (조기종료)
    if (max === 0 || max <= number) {
      answers.push(-1);
      max = Math.max(max, number);
      continue;
    }
    // Case2: 결과 있는 경우
    let answer;
    let back_cnt = 1;
    while (index - back_cnt >= 0) {
      // 범위 내
      const next_index = index - back_cnt;
      // 큰 수
      if (number < numbers[next_index]) {
        answer = numbers[next_index];
        break;
      } else {
        if (answers[answers_cnt - back_cnt] > number) {
          answer = answers[answers_cnt - back_cnt];
          break;
        }
      }
      // 조기 종료 조건
      back_cnt += 1;
    }
    max = Math.max(max, number);
    answers.push(answer);
  }
  return answers.reverse();
}