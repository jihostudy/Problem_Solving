# https://www.acmicpc.net/problem/2467
# 용액, 골드5

import sys


N = int(input())
numbers = list(map(int,input().split(" ")))

left = 0
right = N-1

min_abs = abs(numbers[left]+numbers[right])
answers = [numbers[left],numbers[right]]
# print(f"초기 거리 : {min_abs}, answers : {answers}")

while(left < right):
  sum = numbers[left] + numbers[right]
  # print(f"left : {left}, right: {right}, sum : {sum}")
  
  if(abs(sum) <= min_abs):
    min_abs = min(min_abs,abs(sum))
    answers = [numbers[left],numbers[right]]  
    # print(f"정답 갱신 : {answers}")
  
  if(sum < 0):
    left += 1
  elif(sum > 0):
    right -= 1
  else:
    # print("0이 되는게 있네 ㅋㅋ 럭키")
    break
  

  # print()
print(" ".join(map(str,answers)))

  