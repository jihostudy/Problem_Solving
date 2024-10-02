function solution(numbers, target) {
  // 1. 예외처리
  const numsum = numbers.reduce((accumulater, num) => accumulater + num);
  if (numsum < target) return 0;
  if (numsum * -1 > target) return 0;

  // #2. BFS
  let answer = 0;

  const len = numbers.length;
  function DFS(idx, sum) {
    // Case1. 끝 도달x
    if (idx != len) {
      DFS(idx + 1, sum + numbers[idx]);
      DFS(idx + 1, sum - numbers[idx]);
    }
    // Case2. 끝 도달o
    else {
      if (sum === target) {
        answer += 1;
      }
      return;
      // sum === target ? (answer += 1) : undefined;
    }
  }

  DFS(0, 0);
  return answer;
}