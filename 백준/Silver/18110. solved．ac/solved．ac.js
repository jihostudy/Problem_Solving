const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = parseInt(input.shift()); // 전체 개수
const arr = input.map(Number); // 배열

/** 
 0. 예외처리
 의견 없을 시 -> 0

1. arr 배열을 오름차순 정렬
2. 버려야할 개수 구하기 -> deleteCount (1) -> 1 <= < N-1
3. 버려야할 것들을 제외한 총합 구하기
const newArr = slice(deleteCount, N-deleteCount)
Math.sum(...newArr)
4. 평균 구하기 (반올림)
Math.round()

ex) N =4
arr = [ 1,2 , 3 , 4]
deleteCount = 1
 */

const getRank = (N, arr) => {
  let answer = 0;
  // 0
  if (N == 0) {
    return answer;
  }

  // 1
  arr.sort((a, b) => a - b);

  // 2
  const deleteCount = Math.round((N * 15) / 100);
  // console.log(deleteCount);

  // 3
  const newArr = arr.slice(deleteCount, N - deleteCount);
  // console.log(newArr);

  const sum = newArr.reduce((acc, curr) => acc + curr, 0);

  // 4
  return Math.round(sum / (N - 2 * deleteCount));
};

console.log(getRank(N, arr));
