from collections import deque

N, M = map(int, input().split())
tRow, tCol = None,None
arr = [[0 for _ in range(M)] for _ in range(N)]
for i in range(N):
    rowArr = list(map(int, input().split()))
    for j in range(M):
        arr[i][j] = rowArr[j]
        if(rowArr[j] == 2):
            tRow,tCol = i,j

# print(tRow,tCol)

distance = [[0 for _ in range(M)] for _ in range(N)] # 거리 저장배열
visited = [[False for _ in range(M)] for _ in range(N)] # 방문여부
drow = [0,1,0,-1]
dcol = [1,0,-1,0]

queue = deque()
queue.append((tRow,tCol,0))
distance[tRow][tCol] = 0
visited[tRow][tCol] = True
while(queue):
    row,col,dis = queue.popleft()
    # print(row,col,dis)
    for i in range(4):
        nrow = row + drow[i]
        ncol = col + dcol[i]
        if(0<=nrow<N and 0<=ncol<M and visited[nrow][ncol] == False):
            if(arr[nrow][ncol] == 1):
                queue.append((nrow,ncol,dis+1))
                visited[nrow][ncol] = True
                distance[nrow][ncol] = dis+1


# 출력할때, visited = False인경우
# arr = 1이면 -1 출력 아니면 distance그대로 출력
for row in range(N):
    for col in range(M):
        if(visited[row][col] == False and arr[row][col] == 1):
            print(-1, end=" ")
        else:
            print(distance[row][col],end=" ")
    if(row != N-1):
        print()