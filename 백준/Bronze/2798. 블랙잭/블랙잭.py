import copy

N, M = list(map(int,input().split(" ")))
numbers = list(map(int,input().split(" ")))

max_value = float('-inf')
def recursive(acc,start):
  global max_value
  
  # print(acc,start)
  # 종료 조건
  if(len(acc) == 3):
    accumulate = sum(acc)
    if(accumulate <= M):
      max_value = max(accumulate, max_value)
    return
  
  # 반복
  for i in range(start,N):
    new_acc = copy.deepcopy(acc)
    new_acc.append(numbers[i])
    recursive(new_acc,i+1)

recursive([],0)
print(max_value)