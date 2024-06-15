def solution(friends, gifts):
    answer = 0
    num_friends = len(friends)
    # name to index 변환 배열 n_idx
    n_idx = []
    for name in friends:
        n_idx.append(name)
    # 저번달 선물 개수 2차원 배열
    arr = [[0 for _ in range(num_friends)] for _ in range(num_friends)]
    
        
    # 이번달 받을 개수
    result = [0] * num_friends
    # 저번달 값 저장하기
    for gift in gifts:
        giver, receiver = gift.split()
        a = n_idx.index(giver)
        b = n_idx.index(receiver)
        arr[a][b] += 1
    
    # 선물 지수
    jisu = []
    for i in range(num_friends):
        val = sum(arr[i])
        for j in range(num_friends):
            val -= arr[j][i]
        jisu.append(val)    
    # 메인 로직
    for row in range(0, num_friends, 1):
        for col in range(row+1, num_friends, 1):
            n1 = arr[row][col]
            n2 = arr[col][row]                        
            # 1. 기록있음 
            if(n1 != 0  or n2 != 0):                
                if(n1 > n2):    
                    # n2가 n1한테 줌
                    result[row] += 1                    
                elif(n1 < n2):
                    # n1이 n2한테 줌
                    result[col] += 1                    
                else:
                    # 기록 같음
                    a_jisu = jisu[row]
                    b_jisu = jisu[col]                    
                    if(a_jisu > b_jisu):                        
                        result[row] += 1
                    elif(a_jisu < b_jisu):                        
                        result[col] += 1
            #2. 기록이 없음
            else:
                a_jisu = jisu[row]
                b_jisu = jisu[col]                
                if(a_jisu > b_jisu):                    
                    result[row] += 1
                elif(a_jisu < b_jisu):                    
                    result[col] += 1                                 
                
    # 결과 리턴    
    return max(result)
     