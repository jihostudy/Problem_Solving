/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  for (const num of nums) {
    // #1. 없음
    if (!obj[num]) {
      obj[num] = 1;
    }
    // #2. 있음
    else {
      obj[num] += 1;
    }
  }
  let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  console.log(arr);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(parseInt(arr[i][0]));
  }
  return res;
};