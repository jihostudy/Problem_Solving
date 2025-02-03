function solution(n) {
  let currRow = 0;
  let currCol = 0;

  let max_num = (n * (n + 1)) / 2;
  let mode = 0;

  let arr = Array.from(new Array(n), () => new Array(n).fill(0));
  let num = 1;
  while (num <= max_num) {
    // console.log("currRow:", currRow, "currCol: ", currCol);
    // console.log("num: ", num);

    // 아래 이동
    if (mode === 0) {
      if (currRow < n && arr[currRow][currCol] === 0) {
        arr[currRow][currCol] = num++;
        currRow += 1;
      }
      // 다음 모드로 이동
      else {
        // console.log("아래 후 다음 모드로 이동");
        // console.log();

        currRow -= 1;
        currCol += 1;
        mode = (mode + 1) % 3;
      }
    }
    // 오른쪽 이동
    else if (mode === 1) {
      if (currCol <= currRow && arr[currRow][currCol] === 0) {
        arr[currRow][currCol] = num++;
        currCol += 1;
      }
      // 다음 모드로 이동
      else {
        // console.log("오른쪽 후 다음 모드로 이동");
        // console.log();
        currRow -= 1;
        currCol -= 2;
        mode = (mode + 1) % 3;
      }
    }
    // 왼위 대각선
    else if (mode === 2) {
      // break;
      if (arr[currRow][currCol] === 0) {
        arr[currRow][currCol] = num++;
        currRow -= 1;
        currCol -= 1;
      }
      // 다음 모드로 이동
      else {
        // console.log("대각선 후 다음 모드로 이동");

        currRow += 2;
        currCol += 1;
        mode = (mode + 1) % 3;
      }
    }
    // for (let elm of arr) {
    //   console.log(elm);
    // }
    // console.log();
  }

  // 정답 출력
  let answer = [];
  for (const elm of arr) {
    for (const num of elm) {
      if (num !== 0) {
        answer.push(num);
      } else {
        break;
      }
    }
  }
  return answer;
}