import queue
from collections import deque
#1260번


def check_end(arr):
    check = True
    for i in arr:
        if (i == 0):
            check = False
    return check

#BFS
def BFS(lines, visited, start):
    queue = deque([start])
    visited[start] = True
    ans = []
    while(queue):
        elm = queue.popleft()
        ans.append(elm)
        for i in lines[elm]:
            if(visited[i] == False):
                queue.append(i)
                visited[i] = True
        if(check_end(visited) == True):
            break
    print(*ans)

# DFS
dfs = []
def DFS(lines, visited, start):
    visited[start] = True
    dfs.append(start)

    for i in lines[start]:
        if(visited[i] == False):
            DFS(lines, visited, i)







# N : 점 개수, M : 선 개수, V : 시작 점 번호
N, M, V = map(int, input().split())
# 점 방문 기록
visited = [False for i in range(N + 1)]
# 간선 기록
lines = [[] for i in range(N + 1)]


for i in range(M):
    a, b = map(int, input().split())
    # 양방향
    lines[a].append(b)
    lines[b].append(a)

# 시작 점

# lines를 오름차순으로 정렬
for i in range(1,N+1,1):
    sorted_lines = sorted(lines[i])
    lines[i] = sorted_lines

vcopy = visited.copy()
DFS(lines, visited, V)
print(*dfs)
BFS(lines, vcopy, V)
