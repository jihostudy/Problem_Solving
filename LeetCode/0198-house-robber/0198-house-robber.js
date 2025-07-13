/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const N = nums.length;

  const arr = new Array(N);

  if (N <= 2) {
    return Math.max(...nums);
  }
  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);
  let i = 2;
  for (i; i < N; i++) {
    arr[i] = Math.max(arr[i - 2] + nums[i], arr[i - 1]);
  }

  return arr[N - 1];
};