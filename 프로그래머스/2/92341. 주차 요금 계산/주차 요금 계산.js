function calculate_remain_time(IN, OUT) {
  const [in_hr, in_min] = IN.split(":").map(Number);
  const [out_hr, out_min] = OUT.split(":").map(Number);

  const total_min = out_hr * 60 + out_min - (in_hr * 60 + in_min);
  return total_min;
}

function solution(fees, records) {
  const [time_free, cost_all, time_range, cost_range] = fees;

  let data = {};

  // Iterate All records
  for (const elm of records) {
    const [time, carNumber, id] = elm.split(" ");
    // console.log(carNumber);

    // Case1: 입차
    if (id.includes("IN")) {
      // Case: 첫 입차
      if (!data[carNumber]) {
        data[carNumber] = {
          cnt: 0,
          in: time,
        };
      }
      // Case: 두번째 입차
      else {
        data[carNumber] = {
          ...data[carNumber], // cnt 보존
          in: time,
        };
      }
    }
    // Case2: 출차 (무조건 입차했음을 가정)
    else {
      data[carNumber].cnt += calculate_remain_time(data[carNumber].in, time);
      data[carNumber].in = null;
    }
  }
  // #1-1. in 했는데 나가지 않은 것들은 23:59까지 더하기
  for (const elm in data) {
    if (data[elm].in) {
      data[elm].cnt += calculate_remain_time(data[elm].in, "23:59");
    }
  }
  // #2. 주차요금 최종 계산
  // console.log("cnt 다 더한 이후");

  // console.log(data);

  // #2-1. 차량번호 작은 순으로 정렬
  let arr = [];
  for (const elm in data) {
    arr.push([parseInt(elm), data[elm].cnt]);
  }
  arr.sort((a, b) => a[0] - b[0]);

  // #2-2. 각 요금 계산
  // const [time_free, cost_all, time_range, cost_range] = fees;
  let answer = [];
  for (const [_, cnt] of arr) {
    if (cnt <= time_free) {
      answer.push(cost_all);
    } else {
      answer.push(
        cost_all + Math.ceil((cnt - time_free) / time_range) * cost_range
      );
    }
  }
  return answer;
}

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
