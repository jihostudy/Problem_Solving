function solution(plans) {
  plans = plans.map((plan) => {
    const [a_hour, a_min] = plan[1].split(':').map(Number);
    const dur = parseInt(plan[2]);
    return [plan[0], a_hour * 60 + a_min, dur];
  });
  // #1. plans를 시작시가능 기준으로 오름차순 정렬
  plans.sort((a, b) => a[1] - b[1]);
  // console.log(plans, '\n');

  let resume_plans = []; // 스택
  let answers = [];
  for (const [index, plan] of plans.entries()) {
    if (index === plans.length - 1) {
      break;
    }
    const [c_name, c_start_time, c_dur] = plan;
    // console.log('plan:', c_name);

    const [n_name, n_start_time, n_dur] = plans[index + 1];

    // 시간 안에 완료할 수 있는 경우
    if (c_start_time + c_dur < n_start_time) {
      // console.log('시간 내 완료 가능 다른거 실행');
      answers.push(c_name);

      let left_time = n_start_time - (c_start_time + c_dur);
      while (left_time > 0 && resume_plans.length !== 0) {
        const [resume_name, resume_time] = resume_plans.pop();
        // console.log('시간 남아서 ', resume_name, ' 실행');

        // 끝낼 수 있음
        if (resume_time <= left_time) {
          // console.log('끝내버림');

          answers.push(resume_name);
          left_time -= resume_time;
        }
        // 끝낼 수 없음
        else {
          // console.log('못끝내서 다시 넣음');
          resume_plans.push([resume_name, resume_time - left_time]);
          left_time = 0;
        }
      }
    }
    // 시간이 남는 경우
    else if (c_start_time + c_dur > n_start_time) {
      // console.log('불가능 나중에 더 실행');

      const left_time = c_dur - (n_start_time - c_start_time);
      resume_plans.push([c_name, left_time]);
    }
    // 시간이 딱 되는 경우
    else {
      // console.log('시간 딱 됨');
      answers.push(c_name);
    }
    // console.log('answers:', answers);
    // console.log('tasks to do: ', resume_plans);
  }
  // #3. 남은 resume_plans 실행
  // 마지막 plan 넣기
  answers.push(plans[plans.length - 1][0]);
  while (resume_plans.length !== 0) {
    const [plan_name, _] = resume_plans.pop();
    answers.push(plan_name);
  }
  return answers;
}