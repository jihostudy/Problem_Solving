/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length;

  const array = new Array(len + 1).fill(0);
  array[0] = 0;
  array[1] = 0;

  for (let i = 2; i <= len; i++) {
    const min_A = array[i - 2] + cost[i - 2]; // 2칸 떨어진 최소
    const min_B = array[i - 1] + cost[i - 1]; // 1칸 떨어진 최소
    array[i] = Math.min(min_A, min_B);
  }
  return array[len];
};