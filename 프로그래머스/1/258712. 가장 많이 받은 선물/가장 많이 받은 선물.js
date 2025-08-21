/**
friends : ["muzi", "ryan", "frodo", "neo"]
gifts : [
"muzi frodo",
"muzi frodo",
"ryan muzi",
"ryan muzi",
"ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]
*/
function solution(friends, gifts) {
  const N = friends.length;

  const friends_map = {};
  const board = Array.from(new Array(N), () => new Array(N).fill(0));
  const arr = new Array(N).fill(0);

  let count = 0;
  for (const friend of friends) {
    friends_map[friend] = count++;
  }
  console.log(friends_map);

  // 주고받은 선물 + 선물지수
  for (const gift of gifts) {
    const [from_name, to_name] = gift.split(" ");
    const from = friends_map[from_name];
    const to = friends_map[to_name];
    board[from][to] += 1;

    arr[from] += 1;
    arr[to] -= 1;
  }
  // console.log(arr);

  let cnt_arr = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i >= j) continue;
      // console.log("testing, i: ", i, "j: ", j);

      const p1 = board[i][j];
      const p2 = board[j][i];

      // 주고받은 기록이 없거나 + 주고받은 수가 같다면 : 선물지수 큰 사람
      if ((p1 === 0 && p2 === 0) || p1 === p2) {
        // p1 받음
        if (arr[i] > arr[j]) {
          cnt_arr[i] += 1;
          // console.log("i가 받음");
        }
        // p2 받음
        else if (arr[i] < arr[j]) {
          cnt_arr[j] += 1;
          console.log("j가 받음");
        }
      }
      // 주고받은 기록이 있음 : 선물을 더 많이 준 사람
      else {
        // p1 받음
        if (p1 > p2) {
          cnt_arr[i] += 1;
          console.log("i가 받음");
        }
        // p2 받음
        else if (p1 < p2) {
          cnt_arr[j] += 1;
          console.log("j가 받음");
        }
      }
      console.log();
    }
  }
  console.log(cnt_arr);
  return Math.max(...cnt_arr);
}

