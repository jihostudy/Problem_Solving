def solution(a, b):
    arrlen = len(a)
    answer = 0
    for i in range(arrlen):
        answer += a[i] * b[i]
    return answer