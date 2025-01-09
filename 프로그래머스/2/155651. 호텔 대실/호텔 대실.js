function add10Min(end) {
  let [hour, min] = end.split(':').map(Number);
  hour = hour + Math.floor((min + 10) / 60);
  min = (min + 10) % 60;
  const answer = hour.toString() + ':' + min.toString();
  return answer;
}
function solution(book_time) {
  let book_times = [];
  // #1. 종료시간 +10
  for (const time of book_time) {
    let [start, end] = time;
    book_times.push([start, add10Min(end)]);
  }
  console.log(book_times);

  // #2. times 정렬
  let times = [];
  for (const [start, end] of book_times) {
    const [s_hour, s_min] = start.split(':').map(Number);
    const [e_hour, e_min] = end.split(':').map(Number);
    times.push([s_hour, s_min, 0]);
    times.push([e_hour, e_min, 1]);
  }

  times.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        // 끝 > 시작 순
        return b[2] - a[2];
      }
      // 분 오름차순
      else {
        return a[1] - b[1];
      }
    }
    // 시간 오름차순
    else {
      return a[0] - b[0];
    }
  });
  // console.log(times);

  // #3. 최소 구하기
  let rooms = {
    cnt: 0,
    left: 0,
  };
  for (const time of times) {
    const [hour, min, type] = time;
    // Start
    if (type === 0) {
      // 남는 방이 있음
      if (rooms['left'] !== 0) {
        rooms['left'] -= 1;
      }
      // 남는 방 없음
      else {
        rooms['cnt'] += 1;
      }
    }
    // End
    else if (type === 1) {
      rooms['left'] += 1;
    }
  }
  return rooms['cnt'];
}