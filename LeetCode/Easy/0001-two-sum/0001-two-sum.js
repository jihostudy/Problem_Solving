/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  let [left, right] = [0, len - 1];

  // #0. 정렬
  const sortedNums = nums.toSorted((a, b) => a - b);
  // #1. 순회
  while (true) {
    const add = sortedNums[left] + sortedNums[right];
    if (add === target) {
      const leftIndex = nums.findIndex((val) => val === sortedNums[left]);
      const rightIndex = nums.findIndex(
        (val, idx) => val === sortedNums[right] && idx !== leftIndex
      );
      return [leftIndex, rightIndex];
    } else if (add > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};
