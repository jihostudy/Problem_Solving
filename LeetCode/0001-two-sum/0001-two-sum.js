/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 0. 전처리 (새로운 배열 생성)
  const values = nums.map((num, index) => ({
    val: num,
    index: index,
  }));

  // 1. 값 기준 오름차순 정렬
  values.sort((a, b) => a.val - b.val);

  // 2. 투 포인터
  const len = nums.length;
  let [left, right] = [0, len - 1];

  let answer;
  while (true) {
    const valLeft = values[left].val;
    const valRight = values[right].val;
    const sum = valLeft + valRight;
    if (sum == target) {
      answer = [values[left].index, values[right].index];
      break;
    } else if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    }
  }
  return answer;
};