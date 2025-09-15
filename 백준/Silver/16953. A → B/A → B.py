import sys
import copy
from collections import deque

# 표준 입력을 'input.txt' 파일로 변경합니다.
# 이 코드 라인 아래부터 input() 함수는 키보드 대신 'input.txt' 파일에서 데이터를 읽어옵니다.

A, B = map(int,input().split(" "))

# BFS
queue = deque()
visited = set()

queue.append([A,0]) # [노드, 연산 횟수]
visited.add(A)

answer = -1
while(queue):
  node, count = queue.popleft()
  
  # 종료 조건
  if(node == B):
    answer = count + 1
    break
  
  # *2
  next_node = node * 2
  if(1 <= next_node <= B and  next_node not in visited):
    queue.append([next_node, count + 1])
    visited.add(next_node)
  
  # *10 + 1
  next_node = node * 10 + 1
  if(1 <= next_node <= B and next_node not in visited):
    queue.append([next_node, count + 1])
    visited.add(next_node)

print(answer)