function deepcopy(origin) {
  return JSON.parse(JSON.stringify(origin));
}

function getMax(users, cases) {
  let sum_pls = 0;
  let sum_money = 0;
  // console.log('cases: ', cases);

  for (const user of users) {
    let money = 0;
    const [discount, max_budget] = user;
    // console.log('checking: ', user);

    // #1. 필요한 돈 계산
    for (const key in cases) {
      // 사는 경우
      const key_int = parseInt(key);
      if (key_int >= discount) {
        for (const elm of cases[key]) {
          money += (elm * (100 - key_int)) / 100;
          // console.log('adding: ', (elm * (100 - key_int)) / 100);
        }
      }
    }

    // #2. 예산에 넘는지 확인
    // +구매
    if (max_budget <= money) {
      sum_pls += 1;
      // console.log('예산을 넘어서 임티+구매');
    }
    // no
    else {
      sum_money += money;
      // console.log('임티 그냥 구매');
    }
  }
  // console.log([sum_pls, sum_money]);
  // console.log();

  return [sum_pls, sum_money];
}
function solution(users, emoticons) {
  const emoticon_cnt = emoticons.length;

  const init_cases = { 10: [], 20: [], 30: [], 40: [] };
  const discounts = [10, 20, 30, 40];

  let answers = [];
  // #1. 모든 경우의 수에 대해 큐 실행
  const queue = [[0, init_cases]]; // [t_idx, cases (각 경우에 담은 경우의 수 )]
  while (queue.length !== 0) {
    const [t_idx, cases] = queue.shift();
    // console.log('t_idx: ', t_idx, 'cases: ', cases);

    // $1: 종료 조건
    if (t_idx === emoticon_cnt) {
      // console.log('checking 답 수정...');
      // console.log('cases:', cases);

      const [plus_num, money] = getMax(users, cases);

      answers.push([plus_num, money]);
      // console.log('최신화 answer: ', answers);
      continue;
    }
    // $2. 다음 경우의 수 대입
    const target = emoticons[t_idx];
    for (const discount of discounts) {
      const new_cases = deepcopy(cases);
      new_cases[discount].push(target);
      queue.push([t_idx + 1, new_cases]);
    }
    // for (const arr of queue) {
    //   console.log(arr);
    // }
    // console.log();
  }
  answers.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return b[0] - a[0];
    }
  });
  // console.log(answers);

  return answers[0];
}