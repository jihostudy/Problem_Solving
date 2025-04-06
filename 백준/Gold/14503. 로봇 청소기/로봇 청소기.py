# 시뮬레이션
N, M = map(int, input().split())
[robotRow, robotCol, robotDir] = map(int, input().split())
arr = []
for i in range(N):
    arr.append(list(map(int, input().split())))

dr = [-1,0,1,0]
dc = [0,1,0,-1]


count = 0
while True:
    if(arr[robotRow][robotCol] == 0):
        arr[robotRow][robotCol] = 2  # 청소됨 표시
        count += 1  # 청소 개수 더하기

    # 4방향 중 있는지 판단
    exist = False
    for i in range(4):
        nRow = robotRow + dr[i]
        nCol = robotCol + dc[i]
        if(0 <= nRow < N and 0 <= nCol < M and arr[nRow][nCol] == 0):
            exist = True
            break

    # 바라보고 있는 방향을 유지한 채로 후진할 수 있다면 한 칸 후진하고, 1번으로 돌아간다.
    if not exist:
        nRow = robotRow + dr[(robotDir + 2) % 4]
        nCol = robotCol + dc[(robotDir + 2) % 4]
        if(0 <= nRow < N and 0 <= nCol < M and arr[nRow][nCol] != 1):
            robotRow = nRow
            robotCol = nCol
        else:
            break
    # 반시계 방향 90도 회전, 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않는 빈칸인 경우 한칸 전진한다, 1번으로 돌아간다.
    else:
        robotDir = (robotDir -1) % 4
        nRow = robotRow + dr[robotDir]
        nCol = robotCol + dc[robotDir]
        if(0 <= nRow < N and 0 <= nCol < M and arr[nRow][nCol] == 0):
            robotRow = nRow
            robotCol = nCol

print(count)