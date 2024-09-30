def solution(arr):
    answer = []
    i = 0 # ansewr의 다음 위치
    for num in arr:
        if(i ==0 or answer[i-1] != num):
            answer.append(num)
            i += 1

    return answer