def solution(s):
    answer = [0,0]
    while(s != "1"):
        answer[0] += 1
        ns = ""
        add = 0
        #1. x의 모든 0을 제거한다.
        for char in s:
            if(char != '0'):
                ns += char
            else:
                add += 1
        answer[1] += add
        #2. "길이 c를 2진법으로 표현한 문자열" 로 바꾼다.
        length = len(ns)
        narr = []
        while(length != 0):
            narr.append(str(length % 2))
            length = length // 2
        narr.reverse()
        s = "".join(narr)

    return answer