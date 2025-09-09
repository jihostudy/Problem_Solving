n, k = map(int,input().split(" "))
dp = [ 1] * (n+1)
for i in range(1,n+1):
  dp[i] = dp[i-1] * i
  
print(dp[n] // (dp[n-k] * dp[k]))