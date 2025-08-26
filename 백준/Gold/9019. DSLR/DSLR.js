// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (start, end) => {
  let queue = [];
  const visited = Array.from({ length: 10000 }, () => false);

  queue.push([start, ""]);

  let answer;
  while (queue.length !== 0) {
    // console.log(queue);

    const [number, commands] = queue.shift();

    if (number === end) {
      answer = commands;
      break;
    }

    // D (Double)
    // D 는 n을 두 배로 바꾼다. 결과 값이 9999 보다 큰 경우에는 10000 으로 나눈 나머지를 취한다. 그 결과 값(2n mod 10000)을 레지스터에 저장한다.
    const d_number = (2 * number) % 10000;
    if (!visited[d_number]) {
      queue.push([d_number, commands + "D"]);
      visited[d_number] = true;
    }
    // S (Sub)
    // S 는 n에서 1 을 뺀 결과 n-1을 레지스터에 저장한다. n이 0 이라면 9999 가 대신 레지스터에 저장된다.
    const s_number = number === 0 ? 9999 : number - 1;
    if (!visited[s_number]) {
      queue.push([s_number, commands + "S"]);
      visited[s_number] = true;
    }
    // L (Left Shift)
    // L 은 n의 각 자릿수를 왼편으로 회전시켜 그 결과를 레지스터에 저장한다. 이 연산이 끝나면 레지스터에 저장된 네 자릿수는 왼편부터 d2, d3, d4, d1이 된다.
    const l_number = (number % 1000) * 10 + Math.floor(number / 1000);
    if (!visited[l_number]) {
      queue.push([l_number, commands + "L"]);
      visited[l_number] = true;
    }
    // R (Right Shift)
    const r_number = (number % 10) * 1000 + Math.floor(number / 10);
    if (!visited[r_number]) {
      queue.push([r_number, commands + "R"]);
      visited[r_number] = true;
    }
  }
  return answer;
};

const Testcase = Number(inputs[0]);
const answers = [];
for (let i = 0; i < Testcase; i++) {
  const [start, end] = inputs[1 + i].split(" ").map(Number);
  answers.push(solution(start, end));
}
console.log(answers.join("\n"));
