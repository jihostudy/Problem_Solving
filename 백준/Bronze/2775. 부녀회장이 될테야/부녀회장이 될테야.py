testcase = int(input())
for _ in range(testcase):
  # 거주민 수 출력
  K = int(input())  # k층
  N = int(input()) # n호
  dp = list(range(1,1 + N))
  
  for floor in range(1,K+1):
    for index,num in enumerate(dp):
      if(index - 1 >= 0):
        dp[index] += dp[index-1]
    # print(f"{floor}층 {dp}")
  print(dp[N-1])