
import math

N = int(input())
shirts = list(map(int,input().split(" ")))
T, P = map(int,input().split(" "))

# 티셔츠를 T장씩 최소 몇 묶음 주문
cnt = 0
for shirt in shirts:
  cnt += math.ceil(shirt / T)
  
print(cnt)
# 다음 줄에 펜을 P자루씩 최대 몇 묶음 주문할 수 있는지와, 그 때 펜을 한 자루씩 몇 개 주문하는지 구하세요.
print(N // P, N % P)
