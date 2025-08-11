// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
// console.log(N, M);

const sites = {};
for (let i = 0; i < N; i++) {
  const [domain, password] = inputs[1 + i].split(" ");
  sites[domain] = password;
}

// console.log(sites);

let answers = [];
for (let i = 0; i < M; i++) {
  const domain = inputs[1 + N + i];
  answers.push(sites[domain]);
}
console.log(answers.join("\n"));
