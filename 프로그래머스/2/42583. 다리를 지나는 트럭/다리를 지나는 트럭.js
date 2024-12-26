function solution(bridge_length, weight, truck_weights) {
  const len = truck_weights.length;

  let time = 0;

  let arr = [];
  let sum_weight = 0; // 다리 위에있는 트럭의 무게 합
  let next_truck = 0; // 다음 트럭 index

  while (next_truck < len || arr.length != 0) {
    // #1. 다음 트럭 넣을 수 있는지 판단
    if (arr.length + 1 <= bridge_length && sum_weight + truck_weights[next_truck] <= weight) {
      arr.push([truck_weights[next_truck], bridge_length]);
      sum_weight += truck_weights[next_truck];
      next_truck += 1;
    }

    // #2. 1초 이동
    time += 1;
    // console.log('이동 중 트럭:', arr);

    // #3. arr의 모든 트럭이 1 이동
    let new_arr = [];
    for (const [weight, length] of arr) {
      // 트럭 이동중
      if (length !== 1) {
        new_arr.push([weight, length - 1]);
      }
      // 트럭 이동 완료
      else {
        sum_weight -= weight;
      }
    }
    arr = [...new_arr];

    // console.log(time, '초 이동 후 arr: ', arr);
  }
  return time + 1;
}

// console.log(solution(2, 10, [7, 4, 5, 6]));
// console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
