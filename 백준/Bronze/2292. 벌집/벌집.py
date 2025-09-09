n = int(input())

start = 1
answer = 1
sum = 0
while(True):
  end = 6 * sum + 1 
  # 정답 검사
  if(start <= n <= end):
    print(answer)
    break
  start = end + 1
  sum += answer
  answer += 1
  
  
  