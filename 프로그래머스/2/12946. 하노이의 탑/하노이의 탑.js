function move(n, curr, left, target) {
  if (n === 2) {
    return [
      [curr, left],
      [curr, target],
      [left, target],
    ];
  }
  // n >= 3
  const arr = [
    ...move(n - 1, curr, target, left),
    [curr, target],
    ...move(n - 1, left, curr, target),
  ];
  return arr;
}

function solution(n) {
  return move(n, 1, 2, 3);
}