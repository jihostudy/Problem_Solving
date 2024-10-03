const getLeftElementIndex = (arr, len) => {
  for (let i = 0; i < len; i++) {
    if (arr[i] != 0) {
      return i;
    }
  }
  return undefined;
};
function solution(board, moves) {
  const len = board.length;
  // #1. board 좌 90도 회전
  const arr = Array.from(new Array(len), () => new Array(len));
  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      arr[len - 1 - col][row] = board[row][col];
    }
  }

  //#2. 입력값 -1
  const move_arr = new Array(moves.length);
  for (let i = 0; i < moves.length; i++) {
    move_arr[i] = len - moves[i];
  }

  // #3. 각 입력값 처리
  let answer = 0;
  const stack = [];
  for (const move of move_arr) {
    // row: move의 가장 왼쪽 값 추출
    const leftMostElmIndex = getLeftElementIndex(arr[move], len);
    if (leftMostElmIndex !== undefined) {
      // 1. 값 넣기
      stack.push(arr[move][leftMostElmIndex]);
      arr[move][leftMostElmIndex] = 0;

      // 2. 지워지는지 확인
      const currlen = stack.length;
      if (currlen > 1 && stack[currlen - 1] == stack[currlen - 2]) {
        stack.pop();
        stack.pop();

        answer += 2;
      }
    }
  }
  return answer;
}
