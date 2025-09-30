from collections import deque

S = input()
T = input()

# S를 T로 만들기
# 가능하면 1 없으면 0 출력, T의 길이를 넘어가면 만들 수 없음. 종료
queue = deque()
strings = set()

queue.append(T)

answer  = 0
while(queue):
  curr = queue.popleft()
  # print(f"queue: {queue}")
  # 종료 조건
  if(len(curr) == len(S)):
    if(curr == S):
      answer = 1
    break
  
  
  # A뺀것
  # print(curr)
  # print(curr[-1])
  if(curr[-1] == "A"):
    # print("Entered A")
    next = curr[0:len(curr)-1]
    # print(f"next : {next}")
    queue.append(next)
  
  # B뺴고 뒤집기
  elif(curr[-1] == "B"):
    # print("Entered B")
    next = curr[0:len(curr)-1][::-1]
    queue.append(next)

print(answer)
