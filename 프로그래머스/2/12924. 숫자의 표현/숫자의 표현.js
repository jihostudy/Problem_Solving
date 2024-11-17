function solution(n) {
  let ans = 0;

    for (let k = 1; k * (k + 1) / 2 <= n; k++) {
        // 연속된 수열의 시작점이 자연수인지 확인
        if ((n - (k * (k + 1)) / 2) % k === 0) {
            ans += 1;
        }
    }
    return ans;
}
