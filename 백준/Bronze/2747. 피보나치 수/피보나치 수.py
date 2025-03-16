import sys

# 백준에서는 sys.stdin 사용, 로컬에서는 input.txt 파일 읽기
if sys.stdin.isatty():
    sys.stdin = open("../input.txt", "r")

# 입력 받기
n = int(input())  # 첫 번째 줄 (숫자 입력)

arr = [0] * (n+1)

arr[0] = 0
arr[1] = 1

for i in range(2,n+1):
  arr[i] = arr[i - 1] + arr[i - 2]
  
print(arr[n])