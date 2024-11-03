function solution(s) {
  const arr = s.split(" ").map(Number);
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  const answer = min.toString() + " " + max.toString();
  return answer;
}

console.log(solution("-1 -1"));
