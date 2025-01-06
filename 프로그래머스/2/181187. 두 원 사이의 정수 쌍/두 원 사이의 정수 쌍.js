function solution(r1, r2) {
  let answer = 0;

  for (let x = 0; x <= r1; x++) {
    // console.log('if x : ', x);

    const min = Math.max(1, Math.ceil(Math.sqrt(r1 * r1 - x * x)));
    const max = Math.floor(Math.sqrt(r2 * r2 - x * x));
    // console.log(min, max);
    answer += max - min + 1;
  }
  for (let x = r1 + 1; x < r2; x++) {
    // console.log('if x : ', x);

    const min = 1;
    const max = Math.floor(Math.sqrt(r2 * r2 - x * x));

    // console.log(min, max);
    answer += max - min + 1;
  }

  return answer * 4;
}