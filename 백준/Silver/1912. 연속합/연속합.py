import sys
import copy
from collections import deque

N = int(input())
numbers = list(map(int,input().split(" ")))

dp = [0] * N
for i in range(N):
  dp[i] = max(numbers[i], numbers[i] + dp[i-1])

print(max(dp))