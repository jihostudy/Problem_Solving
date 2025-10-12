def solution(n, lost, reserve):
  # 1. 체육복 개수 저장
  array = [1] * (n + 1)
  for i in lost:
    array[i] -=1
  for i in reserve:
    array[i] += 1
  
  # 2. 앞 -> 뒤 여벌 체육복 있는 사람이 넘겨주기
  # print("넘겨주기 전")
  # print(array)
  
  for i in range(1,n+1):
    if(array[i] == 0):
      # 왼쪽
      if(i-1 >= 1 and array[i-1] >= 2):
        array[i-1] -= 1
        array[i] += 1
      # 오른쪾
      elif(i+1 < n+1 and array[i+1] >= 2):
        array[i+1] -= 1
        array[i] += 1
  # print("넘겨주고 나서")
  # print(array)  
  #3. 정답 계싼
  answer = 0
  for value in array:
    if(value > 0):
      answer += 1
  return answer -1
print(solution(3,[3],[1]))
  