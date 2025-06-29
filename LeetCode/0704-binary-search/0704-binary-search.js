/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const length = nums.length;

  let answer = -1;

  let [left, right] = [0, length - 1];
  while (left <= right) {
    // console.log("left: ", left, "right: ", right);

    const mid = Math.floor((left + right) / 2);

    const current_value = nums[mid];
    // console.log("mid : ", mid, "value : ", current_value);
    // console.log();

    if (current_value === target) {
      answer = mid;
      // console.log("found, answer: ", mid);

      break;
    }
    // 목표보다 큰 경우
    if (current_value > target) {
      right = mid - 1;
    }
    // 목표보다 작은 경우
    else if (current_value < target) {
      left = mid + 1;
    }
  }
  return answer;
};