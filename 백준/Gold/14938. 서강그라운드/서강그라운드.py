# https://www.acmicpc.net/problem/15662
# 서강그라운드, 골드4

import sys
import copy
from collections import deque, defaultdict
from typing import List

N, M, R = map(int,input().split(" ")) # N(지역 개수), M(수색 범위), R(길의 개수)
city_items = list(map(int,input().split(" ")))

INF = float('inf')
board = [[INF] * N for _ in range(N)]

# 입력
for _ in range(R):
  start, end, distance = map(int,input().split(" "))
  board[start-1][end-1] = distance
  board[end-1][start-1] = distance

# 플로이드 - 워셜
for 경유지 in range(N):
  for 출발노드 in range(N):
    for 도착노드 in range(N):
      if board[출발노드][경유지] == INF or board[경유지][도착노드] == INF:
        continue
      board[출발노드][도착노드] = min(board[출발노드][도착노드], board[출발노드][경유지] + board[경유지][도착노드])

def print_2d_arr(array):
  for arr in array:
    print(arr)

answer = -INF
for i in range(N):
  count = 0
  
  distances = board[i]
  for j, distance in enumerate(distances):
    if(i == j):
      count += city_items[j]
    else:
      if(distance <= M):
        count += city_items[j]
  
  answer = max(answer,count)
print(answer)
      
    