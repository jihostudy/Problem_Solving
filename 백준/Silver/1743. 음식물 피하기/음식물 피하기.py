from collections import deque

def print_board(board):
    for arr in board:
        print(*arr)

dr = [0,1,0,-1]
dc = [1,0,-1,0]

# M: 가로, N: 세로
def BFS(board, row, col, visited, M, N):
    queue = deque()

    queue.append([row,col])
    visited[row][col] = True

    count = 0
    while queue:
        row, col = queue.popleft()
        count += 1

        for i in range(4):
            nrow, ncol = row + dr[i], col + dc[i]
            if(0 <= nrow < N and 0 <= ncol < M and visited[nrow][ncol] == False and board[nrow][ncol] == 1):
                queue.append([nrow, ncol])
                visited[nrow][ncol] = True
    return count


# M: 가로(col), N: 세로(row), K: 음식물의 개수
N, M, K = map(int, input().split())

# 0 : 음식물 없음, 1: 음식물 있음
board = [[0 for _ in range(M)] for _ in range(N)]

for i in range(K):
    row,col = map(int, input().split())
    board[row-1][col-1] = 1

# print_board(board)

maxCount = -1
visited = [[False for _ in range(M)] for _ in range(N)]
for row in range(N):
    for col in range(M):
        if(visited[row][col] == False and board[row][col] == 1):
            # print("starting from row: {},col :{}".format(row,col))
            count = BFS(board, row, col, visited, M, N)
            # print("count: {}".format(count))
            maxCount = max(maxCount,count)

print(maxCount)