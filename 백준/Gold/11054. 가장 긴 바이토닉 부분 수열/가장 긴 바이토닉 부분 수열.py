from copy import deepcopy

N = int(input())
numbers = list(map(int,input().split(" ")))

def get_dp(N, array):
  dp = [0] * N
  for target in range(N):
    max_num = 0
    for i in range(target):
      if(numbers[i] < numbers[target]):
        max_num = max(max_num, dp[i])
    dp[target] = max_num + 1
  return dp

def solution(N, numbers):
  # 1. DP
  left_dp = get_dp(N, numbers)
  right_dp = get_dp(N, numbers.reverse())
  right_dp.reverse()

  # 2. 중심을 기준으로 최대 구하기
  answer = 0
  for i in range(N):
    sum = left_dp[i] + right_dp[i] + 1
    answer = max(answer,sum)
  return answer-2

print(solution(N,numbers))