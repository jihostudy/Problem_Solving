// array에서 k개의 최대값을 뺀 값
function removeMaxElements(array, sum, k) {
  const sortedArray = [...array].sort((a, b) => b - a);
  const len = array.length;
  for (let i = 0; i < k && i < len; i++) {
    sum -= sortedArray[i];
  }
  return sum;
}
function solution(n, k, enemy) {
  const len = enemy.length;

  // #0. 누적 합 구하기
  const sumArray = new Array(len).fill(0);
  for (const [index, elm] of enemy.entries()) {
    if (index === 0) {
      sumArray[index] = elm;
    } else {
      sumArray[index] = elm + sumArray[index - 1];
    }
  }

  // #1. right가 F가 맞는지 확인
  const sortedEnemy = [...enemy].sort((a, b) => b - a);

  let sum = sumArray[len - 1];
  for (let i = 0; i < k && i < len; i++) {
    sum -= sortedEnemy[i];
  }
  if (sum <= n) {
    // console.log("항상 가능");

    return len;
  }

  // #2. 정상적인 경우 이분탐색 실시
  let [left, right] = [0, len - 1];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    sum = removeMaxElements(enemy.slice(0, mid + 1), sumArray[mid], k);

    // 가능
    if (sum <= n) {
      left = mid + 1;
    }
    // 불가능
    else {
      right = mid;
    }
  }

  return left;
}