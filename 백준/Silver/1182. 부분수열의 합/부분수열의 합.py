# https://www.acmicpc.net/problem/1182
# 부분수열의 합 , 실버2


N, S = map(int,input().split(" "))
numbers = list(map(int,input().split(" ")))

answer = 0
def recursive(sum,index):
  global answer
  
  if(sum == S and index != 0):
    answer += 1
  
  visited = set()
  for i in range(index,N):
    if(numbers[i] not in visited):
      recursive(sum + numbers[i], i + 1)

recursive(0,0)
print(answer)
    