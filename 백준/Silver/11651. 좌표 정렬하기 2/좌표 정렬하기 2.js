const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(inputs.shift());
// console.log(inputs);

const coordinates = inputs.map((input) => input.split(" ").map(Number));

/**
 * 1. y좌표 오름차순
 * 2. x좌표 오름차순
 */

coordinates.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
// console.log(coordinates);

for (coordinate of coordinates) {
  console.log(coordinate.join(" "));
}
