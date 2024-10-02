function solution(priorities, location) {
  // #1. 객체 만들기
  const obj = priorities.map((priority, index) => ({
    value: priority,
    isAnswer: index === location ? true : false,
  }));

  //#2. max구하면서 location찾기
  let answer = 1;
  let isDone = false;
  while (true) {
    // 한번 찾기
    const max = Math.max(...obj.map((item) => item.value));
    // console.log("cureent max: ", max);

    while (true) {
      const { value, isAnswer } = obj.shift();
      // Case1: 값이 같은 경우
      if (value === max) {
        // #1. 정답이 경우
        if (isAnswer) {
          isDone = true;
        }
        // #2. 정답이 아닌 경우
        else {
          answer += 1;
        }
        // console.log("Max:", max, "랑 똑같음 value찾았음");

        break;
      }
      // Case2: 값이 다른 경우
      else {
        // 큐에 다시 넣기
        obj.push({
          value,
          isAnswer,
        });
      }
    }
    if (isDone) {
      break;
    }
  }
  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
