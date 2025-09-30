str1 = list(input())
str2 = list(input())
len1 = len(str1)
len2 = len(str2)

dp = [[0] * (len2 + 1) for _ in range(len1 + 1)]


for row in range(1, len1+1):
  for col in range(1, len2+1):
    if str1[row-1] == str2[col-1]:
      dp[row][col] = dp[row-1][col-1] + 1
    else:
      dp[row][col] = max(dp[row-1][col], dp[row][col-1])

answer = max(map(max,dp))
print(answer)