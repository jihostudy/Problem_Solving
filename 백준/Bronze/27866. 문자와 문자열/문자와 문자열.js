const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n');

const str = input.shift();

const n = parseInt(input[0]);

console.log(str[n - 1]);
