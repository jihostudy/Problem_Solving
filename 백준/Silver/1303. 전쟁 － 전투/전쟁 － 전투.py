from collections import deque

dr = [0,1,0,-1]
dc = [1,0,-1,0]

def BFS(board, row, col, M, N, visited):
    queue = deque()
    queue.append([row,col])
    visited[row][col] = True

    teamColor = board[row][col]

    count = 0
    while queue:
        row, col = queue.popleft()
        count += 1

        for i in range(4):
            nrow, ncol = row + dr[i], col + dc[i]
            if (0 <= nrow < M and 0 <= ncol < N and visited[nrow][ncol] == False and board[nrow][ncol] == teamColor):
                queue.append([nrow, ncol])
                visited[nrow][ncol] = True
    return count ** 2


N, M = map(int, input().split()) # N : 가로, M : 세로

board = []
for i in range(M):
    board.append(list(input()))

# BFS
teamWhite = 0  # W
teamBlack = 0  # B
visited = [[False for _ in range(N)] for _ in range(M)]

for row in range(M):
    for col in range(N):
        if visited[row][col] == False:
            add = BFS(board, row, col, M, N, visited)
            if(board[row][col] == 'W'):
                teamWhite += add
            elif(board[row][col] == 'B'):
                teamBlack += add


print(teamWhite, teamBlack)