from collections import deque

def print_2darray(arr, col):
    for i in range(col):
        print(*arr[i])


def BFS (arr,N,M, queue, leftCount, time):
    if(leftCount == 0):
        return 0

    # 2. 시간별로 BFS 진행
    dr = [0, 1, 0, -1]  # 동 남 서 북
    dc = [1, 0, -1, 0]

    while queue:
        # 특정 Time 로직
        count = len(queue)
        # print("{} 에 대한 큐: {}".format(time, queue))
        while (count != 0):
            [cRow, cCol, cTime] = queue.popleft()
            count -= 1
            for i in range(4):
                nRow = cRow + dr[i]
                nCol = cCol + dc[i]
                if (0 <= nRow < N and 0 <= nCol < M and arr[nRow][nCol] == 0):
                    queue.append([nRow, nCol, cTime + 1])
                    arr[nRow][nCol] = 1  # 방문처리
                    leftCount -= 1  # 방문개수 감소

        # print_2darray(arr, N)
        # print("남은 개수: {}".format(leftCount) )
        # print("큐 : {}".format(queue))
        if (leftCount == 0):
            break
        else:
            time += 1

    if (leftCount == 0):
        return time + 1
    else:
        return -1

M, N = map(int, input().split())
arr = []

for i in range(N):
    arr.append(list(map(int, input().split())))

# BFS
time = 0
queue = deque()
leftCount = 0
# 1. 초기값 대입
for row in range(N):
    for col in range(M):
        if(arr[row][col] == 1):
            queue.append([row, col, time])
        if(arr[row][col] == 0):
            leftCount += 1
# print("초기 정복 개수: {}".format(leftCount))

answer = BFS (arr, N,M, queue, leftCount, time)
print(answer)