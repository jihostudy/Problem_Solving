import copy
def arrange(arr, inst, row,col, N, M) :
    newArr = [0,0,0,0,0,0]
    # 동
    if(inst == 1):

        newArr[0] = arr[3]
        newArr[1] = arr[1]
        newArr[2] = arr[2]
        newArr[3] = arr[4]
        newArr[4] = arr[5]
        newArr[5] = arr[0]
    # 서
    elif (inst == 2):

        # print("2: 서")
        newArr[0] = arr[5]
        newArr[1] = arr[1]
        newArr[2] = arr[2]
        newArr[3] = arr[0]
        newArr[4] = arr[3]
        newArr[5] = arr[4]
    # 북
    elif (inst == 3):

        newArr[0] = arr[1]
        newArr[1] = arr[4]
        newArr[2] = arr[0]
        newArr[3] = arr[3]
        newArr[4] = arr[2]
        newArr[5] = arr[5]
        # print("3: 북")

    # 남
    elif (inst == 4):

        # print("4: 남")
        newArr[0] = arr[2]
        newArr[1] = arr[0]
        newArr[2] = arr[4]
        newArr[3] = arr[3]
        newArr[4] = arr[1]
        newArr[5] = arr[5]
    return newArr

#
# 2 2 1 1 1
# 2 2
# 2 0


N, M, x, y, K = map(int, input().split())
# N: 세로길이, M: 가로길이, x, y: 좌표, K: 실행횟수

arr = [[0 for _ in range(M)] for _ in range(N)]

for i in range(N):
    il = list(map(int, input().split()))
    for j in range(M):
        arr[i][j] = il[j]

instArr = list(map(int, input().split()))

#-------------------------------------------------------------
dr = [0, 0, 0, -1, 1]
dc = [0, 1, -1, 0, 0]
dice = [0 for _ in range(6)]
# dice = [1,2,3,4,5,6]
for inst in instArr:
    nx = x + dr[inst]
    ny = y + dc[inst]

    if not 0 <= nx < N or not 0 <= ny < M:
        continue
    else:
        newArr = arrange(dice, inst, x, y, N, M)
        dice = newArr.copy()
        # 좌표에 따른 위치 : [y][x]
        val = arr[nx][ny]
        if(val == 0):
            # 지도에 주사위[0] 값 복사
            arr[nx][ny] = dice[0]

        else :
            dice[0] = arr[nx][ny]
            arr[nx][ny] = 0
        x = nx
        y = ny
        if(i == K-1):
            print(dice[4], end="")
        else:
            print(dice[4])
            