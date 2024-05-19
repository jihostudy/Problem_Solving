def solution(s):
    answer = True
        
    pcnt, ycnt = s.lower().count("p"), s.lower().count('y')
    
    if(pcnt != ycnt):
        answer = False    
    return answer