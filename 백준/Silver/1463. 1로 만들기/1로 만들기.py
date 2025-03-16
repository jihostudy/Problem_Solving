import sys

# 백준에서는 sys.stdin 사용, 로컬에서는 input.txt 파일 읽기
if sys.stdin.isatty():
    sys.stdin = open("../input.txt", "r")

# 입력 받기
N = int(input())  # 첫 번째 줄 (숫자 입력)


arr = [0 for _ in range(N+1)] 

for i in range(1,N+1):
  if(i == 1): arr[i] = 0
  elif(i == 2): arr[i] = 1
  else:
    candidates = []
    if i % 2 == 0:
      candidates.append(arr[i // 2])  
    if i % 3 == 0:
      candidates.append(arr[i // 3])  
    candidates.append(arr[i-1])
    
    arr[i] = min(candidates) + 1
print(arr[N])