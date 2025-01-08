function isWin(board, letter) {
  console.log('checking ', letter);

  // 가로 판단
  for (let row = 0; row < 3; row++) {
    let answer = true;
    for (let col = 0; col < 3; col++) {
      if (board[row][col] !== letter) {
        answer = false;
      }
    }
    if (answer) {
      console.log('가로 정답 존재');

      return true;
    }
  }
  // 세로 판단
  for (let col = 0; col < 3; col++) {
    let answer = true;
    for (let row = 0; row < 3; row++) {
      if (board[row][col] !== letter) {
        answer = false;
      }
    }
    if (answer) {
      return true;
    }
  }
  // 대각선 판단
  // [0,0] -> [2,2]
  let ld = true;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] !== letter) {
      ld = false;
    }
  }
  if (ld) {
    return true;
  }
  // [0,2] -> [2,0]
  let rd = true;
  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] !== letter) {
      rd = false;
    }
  }
  if (rd) {
    return true;
  }
  return false;
}
function solution(board) {
  let o_cnt = 0;
  let x_cnt = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'O') {
        o_cnt += 1;
      }
      if (board[i][j] === 'X') {
        x_cnt += 1;
      }
    }
  }

  // #1. 즉시 종료 조건
  if (o_cnt < x_cnt) {
    return 0;
  }
  if (!(o_cnt === x_cnt || o_cnt === x_cnt + 1)) {
    return 0;
  }

  // #2. 판단 조건
  if (isWin(board, 'O')) {
    // 방금 종료됨
    if (o_cnt === x_cnt + 1) {
      if (isWin(board, 'X')) {
        return 0;
      }
      return 1;
    }
    // 'O'로 종료되었는데도 계속함
    else if (o_cnt === x_cnt) {
      return 0;
    }
  }
  // Case2: X가 이긴 경우
  else if (isWin(board, 'X')) {
    console.log('X win');

    // 방금 종료됨
    if (o_cnt === x_cnt) {
      return 1;
    }
    // 'O'로 종료되었는데도 계속함
    else if (o_cnt === x_cnt + 1) {
      return 0;
    }
  }
  // Case3: 아무도 이기지 않은 경우
  return 1;
}