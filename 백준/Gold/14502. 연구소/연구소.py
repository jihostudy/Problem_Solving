import copy
from collections import deque
def calculate_ans(arr, N, M):
    ans = 0
    for i in range(N):
        for j in range(M):
            if (arr[i][j] == 0):
                ans += 1
    return ans

#동서남북
nrowd = [0,0,1,-1]
ncold = [1,-1,0,0]
def DFS(cp_arr, two_arr, N, M):
    # cp_arr : 벽이 추가된 arr
    # two_arr : 2의 위치가 있는 배열
    queue = deque()

    for two_position in two_arr:
        # ex) [1,2]
        queue.append(two_position)
        # print("초기 큐",queue[0])
        # 큐가 빌 때까지
        while queue:
            # print("현재 큐 상태", queue)
            row, col = queue.popleft()
            # print("row",row,"col",col)

            # cp_arr[row][col] = 2
            for i in range(4):
                nrow = row + nrowd[i]
                ncol = col + ncold[i]
                # 범위 안에있는 경우
                if (nrow >= 0 and nrow < N and ncol >= 0 and ncol < M):
                    # 해당 퍼질수 있는 경우
                    if (cp_arr[nrow][ncol] == 0):
                        queue.append([nrow, ncol])
                        cp_arr[nrow][ncol] = 2
            # print("해당 값으로 넣은 결과",queue)
    # 결과 계산하기
    return calculate_ans(cp_arr, N, M)





N,M = map(int, input().split())
arr = [[0 for _ in range(M)] for _ in range(N)]
two_position = []


for i in range(N):
    iarr = list(map(int, input().split()))
    for j in range(M):
        arr[i][j] = iarr[j]
        if(arr[i][j] == 2):
            two_position.append([i,j])

# print(two_position)

# 0의 위치를 담은 2차원 배열 만들기
empty_arr = []
for i in range(N):
    for j in range(M):
        if(arr[i][j] == 0):
            empty_arr.append([i,j])

len_emptyArr = len(empty_arr)
max = -1
for i in range(0,len_emptyArr,1):
    for j in range(i+1,len_emptyArr, 1):
        for k in range(j+1,len_emptyArr,1):
            # 원본 유지를 위해 복사 해놓기
            cp_arr = copy.deepcopy(arr)
            w1,w2,w3 = empty_arr[i], empty_arr[j], empty_arr[k]  # 각 위치
            cp_arr[w1[0]][w1[1]] = 1
            cp_arr[w2[0]][w2[1]] = 1
            cp_arr[w3[0]][w3[1]] = 1
            # print(w1,w2,w3, "를 1로 바꾸는 testcase")
            result = DFS(cp_arr,two_position,N,M)
            if(result > max):
                max = result
                # print("최대값 경신", max)

print(max)

# 2차원 배열을 DFS을 통해 돌면서 영역 계산하기

