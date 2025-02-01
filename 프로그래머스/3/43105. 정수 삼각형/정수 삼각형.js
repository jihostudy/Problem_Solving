function solution(triangle) {
  const height = triangle.length;

  for (let row = 1; row < height; row++) {
    const len = triangle[row].length;
    for (let col = 0; col < len; col++) {
      let val;
      if (col === 0) {
        val = triangle[row][col] + triangle[row - 1][col];
      } else if (col === len - 1) {
        val = triangle[row][col] + triangle[row - 1][col - 1];
      } else {
        val =
          triangle[row][col] +
          Math.max(triangle[row - 1][col - 1], triangle[row - 1][col]);
      }
      triangle[row][col] = val;
    }
  }
  // console.log(triangle[height - 1]);

  return Math.max(...triangle[height - 1]);
}