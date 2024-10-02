function solution(nums) {
  let obj = {};
  // #1. 등장횟수 세기
  for (const num of nums) {
    num in obj ? (obj[num] += 1) : (obj[num] = 1);
  }
  const objLen = Object.keys(obj).length;
  const targetLen = nums.length / 2;
  return objLen <= targetLen ? objLen : targetLen;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
