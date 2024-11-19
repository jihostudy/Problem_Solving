function is_prime(arr) {
  let N = "";
  for (const elm of arr) {
    N += elm.toString();
  }
  N = parseInt(N);
  // console.log("N: ", N);

  const max = Math.floor(Math.sqrt(N));
  // console.log("max: ", max);

  if (N == 1) {
    return false;
  }

  for (let i = 2; i <= max; i++) {
    if (N % i == 0) {
      // console.log(N, " is diveded by", i);

      return false;
    }
  }
  return true;
}

function solution(n, k) {
  // #1. k진법으로 n나누기
  let arr = [];
  while (n != 0) {
    const [q, r] = [Math.floor(n / k), n % k];
    arr.push(r);
    n = q;
  }
  arr.reverse();
  // #2. 소수개수 구하기
  let answer = 0;
  let start = false;
  let num = [];

  for (const elm of arr) {
    // console.log("checking elm:", elm);
    // console.log("start: ", start);

    // Case1: Not zero
    if (elm != 0) {
      if (!start) {
        start = true;
      }
      num.push(elm);
    }
    // Case2: zero
    else {
      // There was elm before
      if (start) {
        if (is_prime(num)) {
          answer += 1;
          // console.log("Adding answer");
        }
        num = []; //초기화
        start = false;
      }
      // If No elm was there skip
    }
    // console.log("");
  }

  // Last Check
  if (start && is_prime(num)) {
    // console.log("num statisfies: ", num);

    answer += 1;
  }
  return answer;
}

console.log(solution(110011, 10));
