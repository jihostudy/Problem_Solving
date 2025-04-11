from collections import deque

def print_Board(board, N):
    for i in range(N):
        print(board[i])

N = int(input())
K = int(input())

board = [[0 for i in range(N)] for j in range(N)]

for i in range(K):
    row,col = map(int, input().split())
    board[row-1][col-1] = 1

L = int(input())
transformation = {}
for i in range(L):
    time, direction =  input().split()
    transformation[time] = direction

snake = deque()
snake.append([0,0])
board[0][0] = 2
direction = 0

dr = [0,1,0,-1]
dc = [1,0,-1,0]

time = 1;
while(True):
    currRow, currCol = snake[len(snake)-1]
    #1. 다음 칸으로 이동 가능 여부 판단
    nextRow = currRow + dr[direction]
    nextCol = currCol + dc[direction]
    #2. 이동 가능
    if(0<=nextRow<N and 0<=nextCol<N and board[nextRow][nextCol] != 2):
        snake.append([nextRow, nextCol])

        # 해당 칸에 사과 존재 여부
        #사과 없음
        if(board[nextRow][nextCol] != 1):
            currTailRow, currTailCol = snake.popleft()
            board[currTailRow][currTailCol] = 0
        board[nextRow][nextCol] = 2
    #3. 이동 불가능
    else:
        break

    #4. 방향 전환 정보가 있는 경우 방향 회전
    if str(time) in transformation:
        directionInfo = transformation[str(time)]
        if (directionInfo == 'D'):
            direction = (direction + 1) % 4
        elif (directionInfo == 'L'):
            direction = (direction - 1) % 4
    time += 1



print(time)

