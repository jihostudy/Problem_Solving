/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 1. 등장 회수 카운트
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  // 2. 배열 직렬화
  const arr = [];
  for (let [key, value] of map) {
    arr.push({
      val: key,
      count: value,
    });
  }
  // 3. 등장 회수 기준 오름차순 정렬
  arr.sort((a, b) => a.count - b.count);

  // 4. k만큼 뒤에서 출력
  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(arr.pop().val);
  }
  return output;
};