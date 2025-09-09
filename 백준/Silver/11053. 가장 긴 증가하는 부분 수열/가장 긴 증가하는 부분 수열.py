n = int(input())
numbers = list(map(int,input().split(" ")))

dp = [1] * n
for i in range(n):
  candidates = []
  for j in range(0,i):
    if(numbers[j] < numbers[i]):
      candidates.append(dp[j])
  # 증가 요소가 있는 경우에만 최대값 갱신
  if(len(candidates) > 0):
    dp[i] = 1 + max(candidates)
print(max(dp))
