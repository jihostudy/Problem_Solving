function solution(progresses, speeds) {
  const len = progresses.length;
  const timeCntArr = new Array(len);

  // #1. 걸리는 시간 계산
  progresses.forEach((progress, index) => {
    const speed = speeds[index];
    timeCntArr[index] = Math.ceil((100 - progress) / speed);
  });

  // #2. 배포마다 몇개 계산
  const answer = [];

  let max = undefined;
  let cnt = 0;
  for (timeCnt of timeCntArr) {
    // Case1: 시작하는 경우
    if (max === undefined) {
      max = timeCnt;
      cnt += 1;
    }
    // Case2: 지나가는 경우
    else if (max >= timeCnt) {
      cnt += 1;
    }
    // Case3: 끝나는 경우
    else if (max < timeCnt) {
      // #1. 답 넣기
      answer.push(cnt);
      // #2. 초기화 하기
      max = timeCnt;
      cnt = 1;
    }
  }
  answer.push(cnt); // #3. 마지막 cnt넣기
  return answer;
}
