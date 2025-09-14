import sys
import copy
from collections import deque

N = int(input())
graph = {}
# print(N)
for _ in range(N-1):
  n1,n2 = map(int,input().split(" "))
  # print(n1,n2)
  if(n1 in graph):
    graph[n1].append(n2)
  else:
    graph[n1] = [n2]
    
  if(n2 in graph):
    graph[n2].append(n1)
  else:
    graph[n2] = [n1]
# print(graph)

# BFS
queue = deque()
visited = [False] * (N+1)
parent = [-1] * (N+1)

queue.append(1)
visited[1] = True

while(len(queue) != 0):
  # print(queue)
  node = queue.popleft()
  
  for target in graph[node]:
    if(visited[target] == False):
       queue.append(target)
       visited[target] = True
       
       # 부모 갱신
       parent[target] = node


# 결과
for i in range(2,N+1):
  print(parent[i])