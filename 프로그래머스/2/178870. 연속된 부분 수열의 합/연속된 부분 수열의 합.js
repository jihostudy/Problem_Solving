function solution(sequence, k) {
  const len = sequence.length;

  let answers = [];
  let [left, right] = [0, 0];
  let sum = sequence[left];
  while (left < len) {
    // console.log('left:', left, 'right:', right, 'sum:', sum);

    // #1. sum을 찾은 경우
    if (sum === k) {
      answers.push([left, right]);
      sum -= sequence[left];
      left += 1;
    }
    // #2. k를 넘어버린 경우
    else if (sum > k) {
      sum -= sequence[left];
      left += 1;
    }
    // #3. k까지 부족한 경우
    else if (sum < k) {
      right += 1;
      if (right >= len) {
        break;
      }
      sum += sequence[right];
    }
  }
  // console.log(answers);
  answers.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - a[0] - b[1] - b[0];
    }
  });
  return answers[0];
}