N, L = map(int, input().split())
arr = [[0 for _ in range(N)] for _ in range(N)]

# 입력받기
for i in range(N):
    il = list(map(int, input().split()))
    for j in range(N):
        arr[i][j] = il[j]

ans = 0
# 가로 검사
for row in range(N):
    # print("------------",row+1,"째 줄", "------------")
    availiable = 1 # 0: false / 1: true

    col = 0
    pv = arr[row][col] # [0]번째 값

    exist = [0 for _ in range(N)]
    while((col +1) < N):
        col += 1
        # print(col ,"검사합니다")
        pv = arr[row][col-1]
        cv = arr[row][col]
        # print("pv:", pv, "cv:", cv)
        # 같은 경우: 다음 값으로 이동
        # if(pv == cv):
            # print("같네 그냥 다음 가자~")
        # 이전 값이 큰 경우
        if(pv > cv):
            # 크기가 1 차이?
            if(pv - cv != 1):
                # print(col,"검사하는데 이전값과 크기 차이가 1이 아니여서 실패!")
                availiable = 0
                break
            # 범위 지키면서, 앞에 L개의 연속된 같은 값이 있다. -> 거기까지 이동가능
            can = 1  # 0: 불가능 / 1: 가능

            cp_col = col # 복제 (안될 수도 있으니)
            cnt = 0 #연속된 같은 높이 카운트
            while cnt < L:
                # 실패하는 경우

                if(cp_col == N or arr[row][cp_col] != cv) or exist[cp_col] == 1:
                    can = 0
                    break
                cp_col += 1
                cnt += 1

            # 불가능
            if(can == 0):
                # print(col, "연속된",L,"개 없어서 실패!")
                availiable = 0
                break
            # 가능
            elif(can == 1):
                # print(col,"에서 연속된",L, "개가 뒤에 있어!")
                for idx in range(col, col + L,1):
                    exist[idx] = 1
                col += L-1

                # print("그래서 col이 ",col,"로 상승됨!")

        # 더 큰게 나온 경우
        elif(pv < cv):
            # 크기가 1 차이?
            if (cv - pv != 1):
                # print(col,"검사하는데 이전값과 크기 차이가 1이 아니여서 실패!")

                availiable = 0
                break
            # 범위 지키면서, 뒤에 L개의 연속된 같은 값이 있다.
            can = 1  # 0: 불가능 / 1: 가능

            cp_col = col - 1  # 복제 (안될 수도 있으니)
            cnt = 0  # 연속된 같은 높이 카운트
            while cnt < L:
                # 불가능
                if  cp_col == -1 or (arr[row][cp_col] != pv) or exist[cp_col] == 1:
                    can = 0
                    break
                cp_col -= 1
                cnt += 1

            # 불가능
            if (can == 0):
                # print(col,"연속된 L개 없어서 실패!")
                availiable = 0
                break
            # 가능
            elif (can == 1):
                for idx in range(col-1, col-L-1,-1):
                    exist[idx] = 1
                continue #아무것도 없음 다음칸 가면됨


        # print(*exist)


    if(availiable == 1):
        ans += 1
    # elif(availiable == 0):
    #     print("row", row, "는 불가능한 경로입니다.")
# 세로 검사
for col in range(N):
    # print("------------",col+1,"째 줄", "------------")
    availiable = 1 # 0: false / 1: true

    row = 0
    pv = arr[row][col] # [0]번째 값

    exist = [0 for _ in range(N)]
    while((row +1) < N):
        row += 1
#         print(row ,"검사합니다")
        pv = arr[row-1][col]
        cv = arr[row][col]
#         print("pv:", pv, "cv:", cv)
        # 같은 경우: 다음 값으로 이동
        # if(pv == cv):
            # print("같네 그냥 다음 가자~")
        # 이전 값이 큰 경우
        if(pv > cv):
            # 크기가 1 차이?
            if(pv - cv != 1):
#                 print(row,"검사하는데 이전값과 크기 차이가 1이 아니여서 실패!")
                availiable = 0
                break
            # 범위 지키면서, 앞에 L개의 연속된 같은 값이 있다. -> 거기까지 이동가능
            can = 1  # 0: 불가능 / 1: 가능

            cp_row = row # 복제 (안될 수도 있으니)
            cnt = 0 #연속된 같은 높이 카운트
            while cnt < L:
                # 실패하는 경우

                if(cp_row == N or arr[cp_row][col] != cv) or exist[cp_row] == 1:
                    can = 0
                    break
                cp_row += 1
                cnt += 1

            # 불가능
            if(can == 0):
#                 print(row, "연속된",L,"개 없어서 실패!")
                availiable = 0
                break
            # 가능
            elif(can == 1):
#                 print(row,"에서 연속된",L, "개가 뒤에 있어!")
                for idx in range(row, row + L,1):
                    exist[idx] = 1
                row += L-1

#                 print("그래서 row이 ",row,"로 상승됨!")

        # 더 큰게 나온 경우
        elif(pv < cv):
            # 크기가 1 차이?
            if (cv - pv != 1):
#                 print(row,"검사하는데 이전값과 크기 차이가 1이 아니여서 실패!")

                availiable = 0
                break
            # 범위 지키면서, 뒤에 L개의 연속된 같은 값이 있다.
            can = 1  # 0: 불가능 / 1: 가능

            cp_row = row - 1  # 복제 (안될 수도 있으니)
            cnt = 0  # 연속된 같은 높이 카운트
            while cnt < L:
                # 불가능
                if  cp_row == -1 or (arr[cp_row][col] != pv) or exist[cp_row] == 1:
                    can = 0
                    break
                cp_row -= 1
                cnt += 1

            # 불가능
            if (can == 0):
                # print(row,"연속된 L개 없어서 실패!")
                availiable = 0
                break
            # 가능
            elif (can == 1):
                for idx in range(row-1, row-L-1,-1):
                    exist[idx] = 1
                continue #아무것도 없음 다음칸 가면됨


#         print(*exist)


    if(availiable == 1):
        ans += 1
    # elif(availiable == 0):
    #     print("col", col, "는 불가능한 경로입니다.")

# 답 출력
print(ans)