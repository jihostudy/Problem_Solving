import copy
L, C = map(int,input().split(" ")) # L(길이), C(알파벳 개수)
chars = input().split(" ")


# 조건1: 최소 한 개의 모음(a, e, i, o, u)과 최소 두 개의 자음
# 조건2: 알파벳이 암호에서 증가하는 순서

#1. 조건2로 인해 름차순 정렬
chars.sort()

#2. 재귀로 모든 가능성 찾기
checks = ['a','e','i','o','u']
answers = []

def recursive(acc,sIndex):
  # 종료 조건
  if(len(acc) == L):
    # #조건1 검사
    # isCheckDone = False
    # for value in acc:
    #   if(value in checks):
    #     isCheckDone = True
    #     break
        
    # if(isCheckDone):
    #   print("".join(acc))
    answers.append("".join(acc))
    return

  # 만들 수 없음
  if(sIndex >= C): 
    return
  
  # 지속 조건
  for index in range(sIndex,C):
    value = chars[index]
    new_acc = copy.deepcopy(acc)
    new_acc.append(value)
    
    recursive(new_acc,index+1)

recursive([],0)

  
# answers 정렬
answers.sort()
for answer in answers:
  #조건1 검사
  vowel_count = 0
  else_count = 0
  for value in answer:
    if(value in checks):
      vowel_count += 1
    else:
      else_count += 1
    
  if(vowel_count >= 1 and else_count >=2 ):
    print(answer)
  