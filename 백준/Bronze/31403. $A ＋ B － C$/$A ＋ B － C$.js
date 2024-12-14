const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [A, B, C] = input;
// #1. 숫자로 생각
console.log(A + B - C);

// #2. 문자열로 생각
let ans = '';
ans += A.toString() + B.toString();
ans = parseInt(ans) - C;

console.log(ans);
