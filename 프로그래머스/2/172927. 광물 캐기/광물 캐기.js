// index : 곡갱이 구분, 미네랄 종류
function calculatePiro(type, minerals) {
  let piro = 0;

  for (const [index, mineral] of minerals.entries()) {
    // 다이아 곡갱이
    if (type === 0) {
      piro += mineral * 1;
    }
    // 철 곡갱이
    else if (type === 1) {
      if (index === 0) {
        piro += mineral * 5;
      } else {
        piro += mineral * 1;
      }
    }
    // 돌 곡갱이
    else if (type === 2) {
      if (index === 0) {
        piro += mineral * 25;
      } else if (index === 1) {
        piro += mineral * 5;
      } else {
        piro += mineral * 1;
      }
    }
  }
  return piro;
}
function solution(picks, minerals) {
  let num_types = 0;
  for (const pick of picks) {
    num_types += pick;
  }

  const num_minerals = minerals.length;

  if (num_types * 5 < num_minerals) minerals = minerals.slice(0, num_types * 5);

  // mineral_seq[i] = [diamond, iron, stone] 형태
  let mineral_seq = Array.from(new Array(Math.ceil(num_minerals / 5)), () => new Array(3).fill(0));

  for (const [index, mineral] of minerals.entries()) {
    const seq_index = Math.floor(index / 5);
    if (mineral === 'diamond') {
      mineral_seq[seq_index][0] += 1;
    } else if (mineral === 'iron') {
      mineral_seq[seq_index][1] += 1;
    } else if (mineral === 'stone') {
      mineral_seq[seq_index][2] += 1;
    }
  }

  // console.log(mineral_seq);

  mineral_seq.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return b[2] - a[2];
      } else {
        return b[1] - a[1];
      }
    } else {
      return b[0] - a[0];
    }
  });

  // 그리디 알고리즘
  let mineral_num = 0;
  let answer = 0;
  for (const [type, pick] of picks.entries()) {
    let left_pick = pick;
    // console.log(left_pick);

    while (left_pick > 0 && mineral_num < mineral_seq.length) {
      // console.log('left_pick: ', left_pick);
      // console.log('mineral_num: ', mineral_num);
      // console.log('type : ', type);
      // console.log('계산 미네랄: ', mineral_seq[mineral_num]);

      // console.log();

      answer += calculatePiro(type, mineral_seq[mineral_num]); // type: 곡갱이 구분, 미네랄 종류
      left_pick -= 1;
      mineral_num += 1;
    }
  }

  return answer;
}