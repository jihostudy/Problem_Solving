import math
N = int(input())
numbers = list(map(int,input().split(" ")))

answer = 0
for number in numbers:
  if(number == 1):
    continue
  max = math.floor(math.sqrt(number))
  
  isPrime = True
  for i in range(2,max + 1):
    if(number % i == 0):
      isPrime = False
      break
  if(isPrime == True):
    answer += 1
    # print(f"{number}은 소수입니다")
print(answer)