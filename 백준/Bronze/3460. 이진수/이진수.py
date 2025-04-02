N = int(input())

for testcase in range(N):
  value = int(input())
  
  answer = []
  while(value != 0):
    answer.insert(0,value % 2)
    value //= 2
  
  #출력
  print_answer = ""
  length = len(answer)
  for i in range(length):
    if answer[length-i-1] == 1:
      print_answer += str(i) + ' '
      
      
  print(print_answer)
    