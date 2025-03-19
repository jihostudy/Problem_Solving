const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N_val, ...arr_val] = input;

const N = parseInt(N_val);
const stairs = arr_val.map(Number);

const solution = (N, stairs) => {
  const dp = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    if (i === 0) dp[i] = stairs[0];
    else if (i === 1) dp[i] = dp[0] + stairs[1];
    else if (i === 2) dp[i] = Math.max(stairs[0], stairs[1]) + stairs[2];
    /** 3번 연속 뛸수 없음 */ else {
      dp[i] = Math.max(dp[i - 3] + stairs[i - 1], dp[i - 2]) + stairs[i];
    }
  }

  return dp[N - 1];
};

console.log(solution(N, stairs));
