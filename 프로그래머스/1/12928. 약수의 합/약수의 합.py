import math

def solution(n):
    answer = 0
    if(n==0): return 0
    half = math.floor(math.sqrt(n))    
    # print(half)
    for i in range(1, half + 1, 1):
        if(n % i == 0):
            answer += i
            # print(f"added {i}")            
            answer += n // i
            # print(f"added {n//i}")
    if(half == math.sqrt(n)):
        answer -= n // half
    return answer