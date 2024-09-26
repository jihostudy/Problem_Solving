// 최적화
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;

  // #0. [index, num] 으로 각각 매핑하기
  const obj = {};
  nums.forEach((num, index) => {
    obj[index] = num;
  });
  const arr = Object.entries(obj);
  arr.sort((a, b) => a[1] - b[1]);

  // #1. 찾기
  let [left, right] = [0, len - 1];
  while (true) {
    const add = arr[left][1] + arr[right][1];
    if (add === target) {
      return [parseInt(arr[left][0]), parseInt(arr[right][0])];
    } else if (add > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};