
import math

n,m = map(int,input().split(" "))

# 최대공약수
max_divide = 1
max_range = min(n,m)
for i in range(2,max_range+1):
  # 둘다 나눠지는 경우
  if(n % i == 0 and m % i == 0):
    max_divide = i
print(max_divide)
# 최소 공배수
print((n // max_divide) * (m // max_divide) * max_divide)