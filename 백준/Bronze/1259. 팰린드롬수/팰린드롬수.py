
import copy
while(True):
  n = int(input())
  if(n == 0):
    break
  
  numbers = []
  while(n > 0):
    numbers.insert(0,n % 10)
    n //= 10
  
  length = len(numbers)
  start,end  = 0, length - 1
  
  isPalindrome = True
  while(start <= end):
    # 정답이 아닌 경우
    if(numbers[start] != numbers[end]):
      isPalindrome = False
      break
    # 이어서 작업
    start += 1
    end -= 1
  if(isPalindrome):
    print("yes")
  else:
    print("no")
      
    
      