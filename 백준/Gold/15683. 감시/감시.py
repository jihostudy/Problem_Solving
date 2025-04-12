from copy import deepcopy

def print_board(board):
    N = len(board)
    for row in range(N):
        print(*board[row])

# 주어진 2차원 배열의 row,col로 시작하는 지점에서 시작하는 방향들에 대해 # 마킹하기
# 리턴값 : 마킹한 # 개수
def mark_available_return_marked(board,N,M,row,col,checkDirections):
    dr = [0,1,0,-1]
    dc = [1,0,-1,0]

    totalCount = 0
    for direction in checkDirections:
        count = 1
        while(True):
            nextRow, nextCol = row + count * dr[direction], col + count * dc[direction]
            if(0 <= nextRow < N and 0 <= nextCol < M and board[nextRow][nextCol] != 6):
                value = board[nextRow][nextCol]
                # 마킹할 장소
                if(value == 0):
                    totalCount += 1
                    board[nextRow][nextCol] = '#'
                count += 1
            else:
                break

    return totalCount





# accumulate를 기반으로 # 표시된 장소의 개수 구하기
def get_markedValue(board,N,M,accumulate):
    newBoard = deepcopy(board)

    totalCount = 0
    for cctvInfo in accumulate:
        row,col,cctvType,cctvDir = cctvInfo

        checkDirections = None
        if(cctvType == 1):
            if(cctvDir == 0):
                checkDirections = [0]
            elif (cctvDir == 1):
                checkDirections = [1]
            elif (cctvDir == 2):
                checkDirections = [2]
            elif (cctvDir == 3):
                checkDirections = [3]
        elif (cctvType == 2):
            if (cctvDir == 0):
                checkDirections = [0,2]
            elif (cctvDir == 1):
                checkDirections = [1,3]
        elif (cctvType == 3):
            if (cctvDir == 0):
                checkDirections = [3,0]
            elif (cctvDir == 1):
                checkDirections = [0,1]
            elif (cctvDir == 2):
                checkDirections = [1,2]
            elif (cctvDir == 3):
                checkDirections = [2,3]
        elif (cctvType == 4):
            if (cctvDir == 0):
                checkDirections = [2,3,0]
            elif (cctvDir == 1):
                checkDirections = [3,0,1]
            elif (cctvDir == 2):
                checkDirections = [0,1,2]
            elif (cctvDir == 3):
                checkDirections = [1,2,3]
        elif (cctvType == 5):
            checkDirections =[0,1,2,3]

        # print("checkDirections",checkDirections)
        # 해당 지점의 방향들에 대해 # 마킹하기
        totalCount += mark_available_return_marked(newBoard,N,M,row,col,checkDirections)
    # 개수
    return totalCount



# 골드3 시뮬레이션

N, M = map(int, input().split())
board = [[0 for _ in range(M)] for _ in range(N)]
cctv = []
available = 0  # 사각지대 가능한 위치 최초 개수
for row in range(N):
    arr = list(map(int, input().split()))
    for col in range(M):
        if(1 <= arr[col] <= 5):
            cctv.append([row,col,arr[col]])
        elif(arr[col] == 0):
            available += 1
        board[row][col] = arr[col]

cctvCount = len(cctv)

# print("available: {}".format(available))
# print("cctv: {}".format(cctv))
#2. 재귀를 하며, 나오는 결과에 대해 최소 사각지대 구하기
minValue = float('inf')
def recursive(count, accumulate):
    # print("count: {}, accumulate: {}".format(count, accumulate))
    #1. 종료 조건
    if(count == cctvCount):
        # print("Entered 종료조건")
        # print("마킹한 개수: {}".format(get_markedValue(board,N,M,accumulate)))
        result = available - get_markedValue(board,N,M,accumulate)

        global minValue
        minValue = min(minValue,result)
        # print("종료이후 최소값: {}".format(minValue))
        return


    #2. 반복 조건
    currentRow, currentCol, cctvType = cctv[count]
    # 각 케이스별 관리
    recursiveCount = None
    if(cctvType == 1):
        recursiveCount = 4
    elif (cctvType == 2):
        recursiveCount = 2
    elif (cctvType == 3):
        recursiveCount = 4
    elif (cctvType == 4):
        recursiveCount = 4
    elif (cctvType == 5):
        recursiveCount = 1

    for i in range(recursiveCount):
        newAccumulate = deepcopy(accumulate)
        newAccumulate.append([currentRow,currentCol,cctvType, i])
        recursive(count+1, newAccumulate)

recursive(0,[])

# 결과 출력
print(minValue)