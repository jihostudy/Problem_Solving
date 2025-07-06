/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const len = numbers.length;

  let [left, right] = [0, len - 1];

  while (true) {
    // 정답 항상 존재
    const sum = numbers[left] + numbers[right];
    // 값을 키워야 하는 경우
    if (sum < target) {
      left += 1;
    }
    // 값을 줄여야 하는 경우
    else if (sum > target) {
      right -= 1;
    }
    // 정답인 경우
    else if (sum == target) {
      break;
    }
  }
  // 정답 출력 (TODO: index + 1하기)
  return [left + 1, right + 1];
};