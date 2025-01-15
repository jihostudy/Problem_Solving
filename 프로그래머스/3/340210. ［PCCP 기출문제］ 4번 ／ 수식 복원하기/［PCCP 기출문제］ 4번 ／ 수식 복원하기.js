function getExpoVal(val, exp) {
  let sum = 0;
  const arr = [1, exp, exp * exp];

  let i = 0;
  while (val > 0) {
    sum += (val % 10) * arr[i];

    i += 1;
    val = Math.floor(val / 10);
  }

  return sum;
}

function updatePossible(expression, possible) {
  let [A, operation, B, equal, C] = expression.split(' ');
  A = parseInt(A);
  B = parseInt(B);
  C = parseInt(C);
  console.log('A:', A, 'B:', B, 'C:', C);

  const expos = [2, 3, 4, 5, 6, 7, 8, 9];
  for (const expo of expos) {
    // #1. 이미 이전에 불가능한 경우로 판단된 경우
    if (!possible[expo - 2]) {
      continue;
    }
    // #2. 이전까지는 true여서 판단이 필요한 경우
    // 덧셈
    console.log('A: ', getExpoVal(A, expo), 'B: ', getExpoVal(B, expo), 'C: ', getExpoVal(C, expo));

    if (operation === '+') {
      if (getExpoVal(A, expo) + getExpoVal(B, expo) !== getExpoVal(C, expo)) {
        possible[expo - 2] = false;
      }
    }

    // 뺄셈
    else if (operation === '-') {
      if (getExpoVal(A, expo) - getExpoVal(B, expo) !== getExpoVal(C, expo)) {
        possible[expo - 2] = false;
      }
    }
  }
}

// val를 expo진수 숫자로 변환
function changeToExpo(val, expo) {
  let answer = [];
  let cnt = 0;
  console.log('Expo: ', expo);

  while (val > 0 && cnt < 10) {
    answer.push(val % expo);
    val = Math.floor(val / expo);
    console.log('val: ', val);
    cnt += 1;
  }
  answer.reverse();
  console.log('answer: ', answer);

  return parseInt(answer.join(''));
}
function getResult(expression, possible) {
  let result;

  let [A, operation, B, equal, C] = expression.split(' ');
  A = parseInt(A);
  B = parseInt(B);
  C = parseInt(C);

  let isError = false;
  for (const [index, expo] of possible.entries()) {
    // False는 건너뜀
    if (!expo) {
      continue;
    }
    // True인 경우
    let val;
    if (operation === '+') {
      val = getExpoVal(A, index + 2) + getExpoVal(B, index + 2);
    } else if (operation === '-') {
      val = getExpoVal(A, index + 2) - getExpoVal(B, index + 2);
    }
    console.log('기존 val:', val);

    val = val === 0 ? 0 : changeToExpo(val, index + 2);
    console.log('진수 val: ', val);

    if (result === undefined) {
      result = val;
    }
    // 불확실한 경우
    else if (result !== val) {
      isError = true;
      break;
    }
  }
  console.log();

  if (isError) {
    return A.toString() + ' ' + operation + ' ' + B.toString() + ' ' + equal + ' ?';
  }
  C = result;
  return A.toString() + ' ' + operation + ' ' + B.toString() + ' ' + equal + ' ' + C;
}

function solution(expressions) {
  let result_expressions = [];
  let possible = new Array(8).fill(true);

  // #0. 모든 숫자의 최대값 + 1 만큼의 진법만 허용 가능
  let max = 0;
  for (const expression of expressions) {
    let [A, operation, B, equal, C] = expression.split(' ');
    A = parseInt(A);
    B = parseInt(B);
    C = parseInt(C);

    while (A > 0) {
      max = Math.max(max, A % 10);
      A = Math.floor(A / 10);
    }
    while (B > 0) {
      max = Math.max(max, B % 10);
      B = Math.floor(B / 10);
    }
    while (C > 0) {
      max = Math.max(max, C % 10);
      C = Math.floor(C / 10);
    }
  }
  for (let i = 0; i <= max - 2; i++) {
    possible[i] = false;
  }

  console.log('after max possible: ', possible);

  // #1. 진법 축소
  for (const expression of expressions) {
    console.log('testing expression: ', expression);

    const len = expression.length;
    // #1-1. 타깃인 경우
    if (expression[len - 1] === 'X') {
      result_expressions.push(expression);
      continue;
    }
    // #1-2. 숫자 있는 경우
    updatePossible(expression, possible);

    console.log('after 평가 possible: ', possible);
  }

  console.log();
  console.log('최종 possible: ', possible);
  // #2. 결과들에 대해 수행
  let result = [];
  for (const expression of result_expressions) {
    console.log('getting result: ', expression);

    result.push(getResult(expression, possible));
  }
  return result;
}