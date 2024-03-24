    # 1966번
N = int(input())

for _ in range(N):
    # 입력 받기
    N, M = map(int, input().split())
    il = list(map(int, input().split()))
    arr = []
    for idx in range(N):
        # flag 판단 넣기
        if(idx == M):
            arr.append([il[idx], 1])
        else:            
            arr.append([il[idx],0])
    ans = 1    
    done = 0 # end flag
    while(done == 0):        
        # 최대값 찾기     
        max = arr[0][0]   
        for i in range(1,N):
            if(max < arr[i][0]):
                max = arr[i][0]
        # 최대값에 해당하는 값 빼내기
        si = 0
        while(True):           
            if(arr[si][0] == max):
                #정답
                if(arr[si][1] == 1): 
                    done = 1
                    break
                #다른 값
                else : 
                    ans += 1
                    arr.pop(si) 
                    N -= 1
                    break                   
            # 맨뒤로 보내기
            else :
                elmt = arr[si]
                arr.pop(si)
                arr.append(elmt)
    print(ans)