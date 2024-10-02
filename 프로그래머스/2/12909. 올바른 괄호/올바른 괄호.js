function solution(s) {
  const stack = [];
  let len = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (element === "(") {
      stack.push(element);
      len++;
    } else if (element === ")") {
      if (len <= 0) {
        return false; // 전체 solution 함수의 리턴값으로 false
      } else if (stack[len - 1] === "(") {
        stack.pop();
        len -= 1;
      } else if (stack[len - 1] === ")") {
        return false; // 전체 solution 함수의 리턴값으로 false
      }
    }
  }

  if (len !== 0) {
    return false;
  }
  return true;
}