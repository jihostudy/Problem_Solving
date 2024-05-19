def solution(s):
    answer = True
        
    pcnt, ycnt = 0, 0
    for ch in s:
        if ch == 'p' or ch == 'P':
            pcnt += 1
        elif ch == 'y' or ch == 'Y':
            ycnt += 1
    if(pcnt != ycnt):
        answer = False    
    return answer