const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

/**
 * 네가 현재 가지고 있는 포켓몬 도감에서 포켓몬의 이름을 보면 포켓몬의 번호를 말하거나, 포켓몬의 번호를 보면 포켓몬의 이름을 말하는 연습을 하도록 하여라
 */

// N : 포켓몬 개수
// M : 문제의 개수

/**
 * 2 <= 포켓몬 이름 길이 <= 20
 *
 * map_str = {
 *  이름 : 인덱스
 * }
 * map_num = {
 *  인덱스 : 이름
 * }
 *
 * if( typeof value === 'number' ) {
 *
 * }
 * else {
 *  const index = animals.findIndex(animal => animal === value)
 * }
 */

const [N, M] = inputs[0].split(" ").map(Number);
const animals = inputs.slice(1, N + 1);

let map_str = {};
let map_num = {};
animals.forEach((element, index) => {
  map_str[element] = index + 1;
  map_num[index + 1] = element;
});

// console.log(map_str);
// console.log(map_num);

const answer_inputs = inputs.slice(N + 1, N + 1 + M);

let answers = [];
for (const answer_input of answer_inputs) {
  // console.log(answer_input);

  const isNumber = "0" <= answer_input[0] && answer_input[0] <= "9";
  let answer;
  if (isNumber) {
    answer = map_num[answer_input];
    answers.push(answer);
  } else {
    answer = map_str[answer_input];
    answers.push(answer);
  }
  // console.log(answer);
}
console.log(answers.join("\n"));
