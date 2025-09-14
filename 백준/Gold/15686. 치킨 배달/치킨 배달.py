import sys
from collections import deque

def print_2d_arr(arr):
  for a in arr:
    print(a)

# 표준 입력을 'input.txt' 파일로 변경합니다.
# 이 코드 라인 아래부터 input() 함수는 키보드 대신 'input.txt' 파일에서 데이터를 읽어옵니다.

N, M = map(int,input().split(" "))
houses = []  # 집 위치
chickens = [] # 치킨집 위치

for row in range(N):
  arr = list(map(int,input().split(" ")))
  for col,value in enumerate(arr):
    if(value == 1):
      houses.append([row,col])
    elif(value == 2):
      chickens.append([row,col])

# print(f"집들 houses : {houses}")
# print(f"chickens : {chickens}")

# 모든 치킨 거리 구하기
"""
최대 M개의 치킨을 고르며, 적게 고른다고 해서 최소 거리가 작아지는 것은 아니므로,
최대 개수인 M개의 치킨집을 고른다고 하고 풀이
"""
def recursive(accumulate, start):
  if(len(accumulate) == M):
    candidates.append(accumulate)
    return
  
  for i in range(start,len(chickens)):
    new_accumulate = accumulate.copy()
    new_accumulate.append(i)
    recursive(new_accumulate,i + 1)

# 특정 포지션에 대해, 각 집과의 거리의 합인 "치킨 거리" 구하기
def get_dist(position1,position2):
  r1, c1 = position1
  r2, c2 = position2
  return abs(r1-r2) + abs(c1-c2)

candidates = []
recursive([],0)

answer = float('inf')
for candidate in candidates:
  # 각 치킨 선택 조합에 대해 거리 구하기
  sum = 0
  
  chicken_positions = []  # 치킨집 실제 위치
  for index in candidate:
    chicken_positions.append(chickens[index])
  
  # 각 house에 대해 최소 거리의 치킨집 선택
  for house in houses:
    min_distance = float('inf')
    
    for position in chicken_positions:
      distance = get_dist(house,position)
      min_distance = min(min_distance,distance)
    sum += min_distance
  answer = min(answer, sum)

print(answer)