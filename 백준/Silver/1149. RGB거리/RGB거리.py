N = int(input())

cost = [[0] * 3 for i in range(N)]
dp = [[0] * 3 for i in range(N)]

for i in range(N):
    cost[i] = list(map(int,input().split()))

# 초기값
dp[0][0],dp[0][1],dp[0][2] = cost[0][0],cost[0][1],cost[0][2]

for i in range(1,N):
    dp[i][0] = min(cost[i][0] + dp[i-1][1], cost[i][0] + dp[i-1][2])
    dp[i][1] = min(cost[i][1] + dp[i - 1][0], cost[i][1] + dp[i - 1][2])
    dp[i][2] = min(cost[i][2] + dp[i - 1][0], cost[i][2] + dp[i - 1][1])
print(min(dp[i][0],dp[i][1],dp[i][2]))
