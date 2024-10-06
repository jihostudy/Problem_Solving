N, M, x, y, K = list(map(int, input().split()))

def command_movement(command): # 주사위를 이동시키는 값 반환
    movex, movey = None, None
    if(command == 1):#동
        movex, movey = 0, 1
    elif (command == 2):#서
        movex, movey = 0, -1
    elif (command == 3):#북
        movex, movey = -1, 0
    elif (command == 4):#남
        movex, movey = 1, 0
    return movex,movey
def move_dice(command, dice_position):
    current_dice_position = dice_position
    if (command == 1):  # 동
        return { #주사위의 형태
            "right": current_dice_position["top"],
            "left": current_dice_position["bottom"],
            "front": current_dice_position["front"], # 동일
            "back": current_dice_position["back"], #동일
            "top": current_dice_position["left"],
            "bottom": current_dice_position["right"]
        }
    elif (command == 2):  # 서
        return {  # 주사위의 형태
            "right": current_dice_position["bottom"],
            "left": current_dice_position["top"],
            "front": current_dice_position["front"],  # 동일
            "back": current_dice_position["back"],  # 동일
            "top": current_dice_position["right"],
            "bottom": current_dice_position["left"]
        }
    elif (command == 3):  # 북
        return {  # 주사위의 형태
            "right": current_dice_position["right"], # 동일
            "left": current_dice_position["left"], # 동일
            "front": current_dice_position["bottom"],
            "back": current_dice_position["top"],
            "top": current_dice_position["front"],
            "bottom": current_dice_position["back"]
        }
    elif (command == 4):  # 남
        return {  # 주사위의 형태
            "right": current_dice_position["right"], # 동일
            "left": current_dice_position["left"], # 동일
            "front": current_dice_position["top"],
            "back": current_dice_position["bottom"],
            "top": current_dice_position["back"],
            "bottom": current_dice_position["front"]
        }

#1. 보드판 입력 받기
arr = [[0] * M for _ in range(N)]
for i in range(N):
    rowList = list(map(int,input().split()))
    arr[i] = rowList

#2. 명령들
commands = list(map(int, input().split()))

#3. 주사위 값
dice = { # 주사위의 위치별 값
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
}
position = { #주사위의 형태
    "right": 3,
    "left": 4,
    "front": 2,
    "back": 5,
    "top": 1,
    "bottom": 6
}

#4. 명령별로 실행
for command in commands:
    # print("checking command {}".format(command))
    mx, my = command_movement(command) #이동할 거리
    if(0 <= x + mx <= N-1 and 0 <= y + my <= M-1):
        x, y = x+mx, y+my # 주사위 좌표이동
        position = move_dice(command,position) # 주사위 위치이동
        # print("after moving dice positon is {}".format(position))
        # Case1: 보드칸이 0인 경우
        if(arr[x][y] == 0):
            arr[x][y] = dice[position["bottom"]] #주사위 칸을 판에 복사
        # Case2: 보드칸이 0이 아닌 경우
        else:
            dice[position["bottom"]] = arr[x][y] #칸에 쓰여있는 수가 주사위 바닥면으로 복사
            arr[x][y] = 0 #칸에 쓰여있는 수 = 0
        # 출력: 윗면 값
        print(dice[position["top"]])