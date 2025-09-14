# import sys
# from collections import deque

# def print_2d_arr(arr):
#   for a in arr:
#     print(a)

# # 표준 입력을 'input.txt' 파일로 변경합니다.
# # 이 코드 라인 아래부터 input() 함수는 키보드 대신 'input.txt' 파일에서 데이터를 읽어옵니다.

# N, M = map(int,input().split(" "))
# board = []
# houses = []  # 집 위치
# chickens = [] # 치킨집 위치

# for row in range(N):
#   arr = list(map(int,input().split(" ")))
#   for col,value in enumerate(arr):
#     if(value == 1):
#       houses.append([row,col])
#     elif(value == 2):
#       chickens.append([row,col])
#   board.append(arr)

# print(f"집들 houses : {houses}")
# print(f"chickens : {chickens}")

# # 모든 치킨 거리 구하기
# candidates = []
# def recursive(accumulate, start):
#   if(len(accumulate) == M):
#     candidates.append(accumulate)
#     return
  
#   for i in range(start,len(chickens)):
#     new_accumulate = accumulate.copy()
#     new_accumulate.append(i)
#     recursive(new_accumulate,i + 1)
    
# recursive([],0)

# print(f"치킨 선택 조합 candidates : {candidates}")

# # # 특정 포지션에 대해, 각 집과의 거리의 합인 "치킨 거리" 구하기
# # def get_dist(houses,position):
# #   row, col = position
# #   dist = 0
# #   for house in houses:  
# #     house_row, house_col = house
# #     dist += abs(house_row - row) + abs(house_col - col)
# #   return dist
  

# # 각 치킨 선택 조합에 대해 거리 구하기
# dr = [0,1,0,-1]
# dc = [1,0,-1,0]

# answer = float('inf')
# for candidate in candidates:
#   chicken_arr = []  # 치킨집 위치
#   for index in candidate:
#     chicken_arr.append(chickens[index])
  
#   print(chicken_arr)
#   # BFS로 거리 구하기
#   queue = deque()
#   visited = [[False] * N for _ in range(N)]
#   distance = [[float('inf')] * N for _ in range(N)]
  
#   # 초기 위치 넣기
#   for arr in chicken_arr:
#     row, col = arr
#     queue.append([row,col,0])
#     visited[row][col] = True
    
#   while(queue):
#     row,col,dist = queue.popleft()
    
#     distance[row][col] = min(dist, distance[row][col])
    
#     for i in range(4):
#       nrow = row + dr[i]
#       ncol = col + dc[i]
#       if(0 <= nrow < N and 0 <= ncol < N and visited[nrow][ncol] == False):
#         queue.append([nrow,ncol, dist + 1])
#         visited[nrow][ncol] = True
  
#   # print(f"최소 거리를 구한 2차원 배열")
#   # print_2d_arr(distance)
  
#   # 치킨 거리 구하기
#   sum = 0
#   for house in houses:
#     row,col = house
#     sum += distance[row][col]
#   print(f"치킨 거리 : {sum}")

#   answer = min(answer,sum)
# print(answer)
    
    
    
import sys
from collections import deque

def print_2d_arr(arr):
  for a in arr:
    print(a)

# 표준 입력을 'input.txt' 파일로 변경합니다.
# 이 코드 라인 아래부터 input() 함수는 키보드 대신 'input.txt' 파일에서 데이터를 읽어옵니다.

N, M = map(int,input().split(" "))
board = []
houses = []  # 집 위치
chickens = [] # 치킨집 위치

for row in range(N):
  arr = list(map(int,input().split(" ")))
  for col,value in enumerate(arr):
    if(value == 1):
      houses.append([row,col])
    elif(value == 2):
      chickens.append([row,col])
  board.append(arr)

# print(f"집들 houses : {houses}")
# print(f"chickens : {chickens}")

# 모든 치킨 거리 구하기
candidates = []
def recursive(accumulate, start):
  if(len(accumulate) == M):
    candidates.append(accumulate)
    return
  
  for i in range(start,len(chickens)):
    new_accumulate = accumulate.copy()
    new_accumulate.append(i)
    recursive(new_accumulate,i + 1)
    
recursive([],0)

# print(f"치킨 선택 조합 candidates : {candidates}")

# 특정 포지션에 대해, 각 집과의 거리의 합인 "치킨 거리" 구하기
def get_dist(position1,position2):
  r1, c1 = position1
  r2, c2 = position2
  return abs(r1-r2) + abs(c1-c2)
  

answer = float('inf')
for candidate in candidates:
  # 각 치킨 선택 조합에 대해 거리 구하기
  sum = 0
  
  chicken_arr = []  # 치킨집 위치
  for index in candidate:
    chicken_arr.append(chickens[index])
  
  # print(chicken_arr)
  # 각 house에 대해 최소 거리의 치킨집 선택
  for house in houses:
    min_distance = float('inf')
    
    for arr in chicken_arr:
      distance = get_dist(house,arr)
      min_distance = min(min_distance,distance)
    sum += min_distance
  # print(f"해당 후보 치킨집 {chicken_arr}의 치킨 거리 : {sum}\n")
  answer = min(answer, sum)

print(answer)