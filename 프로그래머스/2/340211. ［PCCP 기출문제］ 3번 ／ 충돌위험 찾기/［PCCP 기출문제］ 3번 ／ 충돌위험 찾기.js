function getPosition(points, point_number) {
  return points[point_number - 1];
}
function movePosition(curr_position, next_position) {
  const route = [curr_position];

  let [curr_row, curr_col] = curr_position;
  let [next_row, next_col] = next_position;

  // #1. Row 이동
  // 아래로 내려가기
  if (next_row > curr_row) {
    while (curr_row !== next_row) {
      curr_row += 1;
      route.push([curr_row, curr_col]);
    }
  }
  // 위로 올라라가기
  else {
    while (curr_row !== next_row) {
      curr_row -= 1;
      route.push([curr_row, curr_col]);
    }
  }
  // #2. Col 이동
  // 오른쪽 이동동
  if (next_col > curr_col) {
    while (curr_col !== next_col) {
      curr_col += 1;
      route.push([curr_row, curr_col]);
    }
  }
  // 왼쪽 이동
  else {
    while (curr_col !== next_col) {
      curr_col -= 1;
      route.push([curr_row, curr_col]);
    }
  }
  // console.log('move position returns', route);
  return route;
}

function solution(points, routes) {
  let arr = []; // 실제 경로를 담은 2차원 배열
  let len_routes = []; // 각 경로의 길이를 담은 1차원 배열
  // #1. 각 Route 별로 경로 생성
  for (const route of routes) {
    const len = route.length;
    // console.log('route: ', route);

    let curr_position = getPosition(points, route[0]); // 위치
    // console.log('current position: ', curr_position);

    let actual_route = [];
    for (let i = 1; i < len; i++) {
      // 다음 이동 경로
      const next_position = getPosition(points, route[i]);
      // console.log('target position: ', next_position);
      // 겹치는 경로 빼기
      const move_position = movePosition(curr_position, next_position);
      if (i !== len - 1) {
        const remove_last = move_position.slice(0, move_position.length - 1);
        actual_route.push(...remove_last);
      } else {
        actual_route.push(...move_position);
      }
      curr_position = [...next_position];
    }

    arr.push(actual_route);
    len_routes.push(actual_route.length);
  }
  // console.log('arr');

  // console.log(arr);

  // #2. 모든 경로를 토대로, 겹치는 개수 판단
  let answer = 0;
  const robot_num = routes.length;
  const max_route = Math.max(...len_routes);
  for (let i = 0; i < max_route; i++) {
    // console.log(i, '번째 시간');

    let obj = {};
    for (let robot = 0; robot < robot_num; robot++) {
      // 값이 있는 경우
      if (i < len_routes[robot]) {
        if (obj[arr[robot][i]] === undefined) {
          obj[arr[robot][i]] = false;
        }
        // 이미 true로 있던 경우
        else if (obj[arr[robot][i]] === false) {
          // console.log('entered true');

          obj[arr[robot][i]] = true;
        }
      }
    }
    // console.log(obj);

    // True의 개수 더하기
    for (const val of Object.values(obj)) {
      if (val) {
        answer += 1;
      }
    }
  }
  return answer;
}