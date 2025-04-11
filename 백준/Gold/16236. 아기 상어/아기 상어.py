from collections import deque
# 골드3
def print_board(board,N):
    for row in range(N):
        print(*board[row])

# board에서 shark의 위치에서 row, col까지 이동하는 최단거리 구하기
def get_pathLength(board,N,shark,size,targetRow,targetCol,current_min):
    sharkRow, sharkCol = shark
    dr = [-1,0,1,0]
    dc = [0,1,0,-1]

    visited = [[False for _ in range(N)] for _ in range(N)]
    queue = deque()
    queue.append([sharkRow, sharkCol, 0])
    visited[sharkRow][sharkCol] = True

    while(queue):
        # print("queue: {}".format(queue))
        currentRow,currentCol, currentPathLength = queue.popleft()
        # print("currentRow: {}, currentCol: {}, currentPathLength: {}".format(currentRow,currentCol,currentPathLength))
        # 조기 종료
        if (current_min < currentPathLength):
            return -1

        # 종료 조건
        if(currentRow == targetRow and currentCol == targetCol):
            return currentPathLength


        for i in range(4):
            nextRow = currentRow + dr[i]
            nextCol = currentCol + dc[i]
            if 0 <= nextRow < N and 0 <= nextCol < N and visited[nextRow][nextCol] == False and board[nextRow][nextCol] <= size:
                queue.append([nextRow,nextCol,currentPathLength+1])
                visited[nextRow][nextCol] = True
    # 갈 수 없는 경우
    return -1


N = int(input())
board = [[0 for _ in range(N)] for _ in range(N)]

shark = None
leftOver = 0
for row in range(N):
    arr = list(map(int, input().split()))
    for col in range(N):
        if(arr[col] == 9):
            shark = [row,col]
            board[row][col] = 0
        else:
            if(arr[col] != 0):
                leftOver += 1
            board[row][col] = arr[col]

size = 2
eatCount = 0
time = 0

while(True):

    # print("현재 보드 상태")
    # print_board(board,N)

    # print("상어 위치: {}".format(shark))
    # print("상어 크기: {}".format(size))
    # print("상어가 먹은 개수: {}".format(eatCount))

    #1. 먹을 수 있는 물고기 탐색 + 각 물고기별 최단 거리 구하기
    min = float('inf')
    eatable = []
    for row in range(N):
        for col in range(N):
            # 물고기 존재, 먹을 수 있는지 여부
            if(board[row][col] != 0 and board[row][col] < size):
                # print("[{},{}]은 물고기 존재, 먹을 수 있음".format(row,col))
                path_length = get_pathLength(board,N,shark,size,row,col, min)
                # print("path_length: {}, min: {}".format(path_length,min))
                # 도달할 수 없는 경우 and 최소 거리가 아닌 경우
                if(path_length == -1):
                    continue
                else:
                    # 더 작은 거리
                    if(min > path_length):
                        eatable = [[row,col,path_length]]
                        min = path_length
                    # 같은 거리
                    elif(min == path_length):
                        eatable.append([row,col,path_length])
                # print("eatable: {}".format(eatable))
                # print()
    # print(eatable)

    #2. 먹을 수 있는 물고기 중 이동할 물고기 정하기

    # 먹을 수 있는 물고기 없음
    if(len(eatable) == 0):
       break
    # 먹을 수 있는 물고기 있음
    else:
        eatable.sort(key=lambda x: (x[0], x[1]))
        # print("정렬된 eatable: {}".format(eatable))

        targetRow, targetCol, targetPathLength = eatable[0]
        shark = [targetRow, targetCol] # 상어 이동
        board[targetRow][targetCol] = 0 # 먹음 처리
        time += targetPathLength
        # print("더해지는 시간: {}".format(targetPathLength))
        eatCount += 1
        if(size == eatCount):
            size += 1
            eatCount = 0

print(time)
