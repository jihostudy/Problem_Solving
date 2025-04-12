from collections import deque

def print_board(board):
    for row in board:
        print(*row)


N, M = map(int, input().split())

board = [[0 for _ in range(M)] for _ in range(N)]
start = None
leftCount = 0
for row in range(N):
    arr = list(map(int, input().split()))
    for col in range(M):
        board[row][col] = arr[col]
        if(start == None and board[row][col] == 0):
            start = [row,col]
        if(board[row][col] == 1):
            leftCount += 1

time = 0


dr = [0,1,0,-1]
dc = [1,0,-1,0]

while(True):
    # print("time: {}".format(time))
    # print_board(board)
    # 1.start 부터 흰색 영역을 BFS 하며 테두리 영역 구하기
    boundary = []

    #BFS
    queue = deque()
    visited = [[False for _ in range(M)] for _ in range(N)]

    queue.append(start)
    visited[start[0]][start[1]] = True

    while(queue):
        currentRow, currentCol = queue.popleft()

        for i in range(4):
            nextRow, nextCol = currentRow + dr[i], currentCol + dc[i]
            if(0<=nextRow<N and 0<=nextCol<M and visited[nextRow][nextCol] == False):
                visited[nextRow][nextCol] = True
                if(board[nextRow][nextCol] == 0):
                    queue.append([nextRow, nextCol])
                elif(board[nextRow][nextCol] == 1):
                    boundary.append([nextRow, nextCol])

    # print("boundary: {}".format(boundary))
    # 2. 이전 값 트래킹 및 테두리 영역 치즈 지우기
    time += 1
    # 마지막 전인 경우
    if(leftCount == len(boundary)):
        # print("마지막 전임 ✅")
        break
    else:
        # print("마지막 전 아니라서 치즈 삭제하고 진행 ❌")
        # 치즈 삭제
        for place in boundary:
            targetRow, targetCol = place
            board[targetRow][targetCol] = 0
        leftCount -= len(boundary)
    # print()
print(time)
print(leftCount)