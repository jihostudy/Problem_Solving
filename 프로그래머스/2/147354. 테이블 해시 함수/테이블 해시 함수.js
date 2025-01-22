function solution(data, col, row_begin, row_end) {
  const N = data.length;
  const M = data[0].length;

  // #1. col 기준 오름차순 정렬, 같을 시 [0] 기준 내림차순 정렬
  data.sort((a, b) => {
    // [0] 기준 내림차순
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    // col 기준 오름차순
    return a[col - 1] - b[col - 1];
  });
  // console.log(data);

  // #2. row_begin <= i <=row_end인 Si 모두 bitwise sum
  let answer = 0;
  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    let sum = 0;
    for (let j = 0; j < M; j++) {
      sum += data[i][j] % (i + 1);
    }
    answer = answer ^ sum;
  }

  return answer;
}
