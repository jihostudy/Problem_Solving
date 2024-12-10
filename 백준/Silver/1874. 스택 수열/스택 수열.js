const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input.shift();
const targets = [...input];
const stack = [];
const answer = []; // 정답을 저장할 배열

let idx = 0;
let num = 1;

let isError = false;
while (idx < N && !isError) {
  //#1. 하나의 Target에 대한 반복문
  const target = targets[idx];

  // #2. push하다가 같은 값 나오면 pop + num update
  if (num <= target) {
    while (num <= target) {
      stack.push(num);
      answer.push('+');
      num += 1;
    }
    stack.pop(); // target에 해당하는 원소 빼기
    answer.push('-');
  }
  // #3. 스택의 끝과 비교
  else {
    const stack_len = stack.length;
    // 같으면 pop()
    if (stack[stack_len - 1] === target) {
      stack.pop();
      answer.push('-');
    }
    //  아니면 '실패'
    else {
      isError = true;
      break;
    }
  }
  idx += 1;
}

if (isError) {
  console.log('NO');
} else {
  for (const elm of answer) {
    console.log(elm);
  }
}
