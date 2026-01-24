N = int(input())

dp = [[0] * 2 for _ in range(N+1)]
dp[1][1] = 1

for n in range(2,N+1):
  dp[n][0] = dp[n-1][0] + dp[n-1][1]
  dp[n][1] = dp[n-1][0]

print(dp[N][0] + dp[N][1])