var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = nums[mid];
    if (val === target) {
      return mid;
    } else if (val < target) {
      left = mid + 1;
    } else if (val > target) {
      right = mid - 1;
    }
  }
  return -1;
};