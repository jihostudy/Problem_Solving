const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(inputs.shift());
// console.log(inputs);

const peoples = inputs.map((input, index) => {
  const [age, name] = input.split(" ");
  return [Number(age), index, name];
});
// console.log(peoples);

/**
 * 1. 나이 오름차순 => peoples[0]
 * 2. 먼저 가입한 사람이 앞에 (오름차순) => peoples[1]
 */
peoples.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

// console.log(peoples);
for (const people of peoples) {
  console.log(people[0], people[2]);
}
