/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[0];
};