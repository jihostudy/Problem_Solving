import sys
import copy
from collections import deque

# 표준 입력을 'input.txt' 파일로 변경합니다.
# 이 코드 라인 아래부터 input() 함수는 키보드 대신 'input.txt' 파일에서 데이터를 읽어옵니다.

N, K = map(int,input().split(" "))
# N -> K 로의 최단 시간안에 이동
"""
1초 후 : +1, -1
0초 후 : *2 

백트래킹 / BFS
"""

limit=100001
cnt=[0]*limit
visited=[False]*limit

def BFS(start,end):
    queue=deque()
    queue.append(start)

    while queue:
        node=queue.popleft()
        if node==end:
          return cnt[node]
      
        for index, next_node in enumerate([node *2, node - 1, node + 1]):
          if -1<next_node<limit and visited[next_node]==0 :
            # queue.appendleft(next_node)
            
            
            if(index == 0):
              queue.appendleft(next_node)
              cnt[next_node] = cnt[node] 
            else:
              queue.append(next_node)
              cnt[next_node] = cnt[node] + 1
            visited[next_node]=True  
        

print(BFS(N,K))