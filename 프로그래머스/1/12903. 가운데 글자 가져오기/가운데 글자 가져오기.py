def solution(s):
    answer = ''
    sl = len(s)
    if(sl % 2 == 0):
        answer += s[sl // 2 - 1] + s[sl // 2]
    else:
        answer += s[sl // 2]
    return answer