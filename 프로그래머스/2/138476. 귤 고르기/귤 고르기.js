function solution(k, tangerine) {
  let countObj = {};

  for (const tan of tangerine) {
    if (!countObj[tan]) {
      countObj[tan] = 1;
    } else {
      countObj[tan] += 1;
    }
  }

  // console.log(countObj);

  const arr = Object.entries(countObj);
  arr.sort((a, b) => b[1] - a[1]);

  let idx = 0;
  while (k > 0) {
    const count = arr[idx][1];
    k -= count;
    idx += 1;
  }
  return idx;
}