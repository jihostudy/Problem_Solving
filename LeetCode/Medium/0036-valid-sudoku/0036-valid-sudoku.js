/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const len = 9;
  // #1. 가로
  for (let i = 0; i < 9; i++) {
    const target = board[i];
    const cnt = new Array(9).fill(false);
    for (const t of target) {
      if (t === ".") continue;
      else {
        if (cnt[parseInt(t) - 1] === true) return false;
        cnt[parseInt(t) - 1] = true;
      }
    }
  }
  // #2. 세로
  for (let col = 0; col < 9; col++) {
    const cnt = new Array(9).fill(false);
    for (let row = 0; row < 9; row++) {
      const target = board[row][col];
      if (target === ".") continue;
      else {
        if (cnt[parseInt(target) - 1] === true) return false;
        cnt[parseInt(target) - 1] = true;
      }
    }
  }
  // #3. 3x3
  for (let row_blk = 0; row_blk < 3; row_blk++) {
    for (let col_blk = 0; col_blk < 3; col_blk++) {
      const cnt = new Array(9).fill(false);
      let i = 0,
        j = 0;
      for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
          const target = board[row_blk * 3 + i][col_blk * 3 + j];
          if (target === ".") continue;
          else {
            if (cnt[parseInt(target) - 1] === true) return false;
            cnt[parseInt(target) - 1] = true;
          }
        }
      }
    }
  }

  return true;
};