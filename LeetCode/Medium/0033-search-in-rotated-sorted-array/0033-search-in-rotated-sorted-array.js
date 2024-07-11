var search = function (nums, target) {
  const arr = nums.toSorted((a, b) => a - b);
  // console.log(arr);
  let [left, right] = [0, arr.length - 1];
  while (left <= right) {
    // console.log("left: ", left, "right: ", right);
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      // console.log("Found mid: ", mid);
      return nums.indexOf(target);
    }
  }
  return -1;
};