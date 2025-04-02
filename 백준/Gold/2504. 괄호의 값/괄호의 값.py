def getSum(numbers):
  sum = 0
  length = len(numbers)
  for i in range(length):
    sum = sum + numbers[i]
  return sum

arr = list(input())
length = len(arr)

stack = []
isError = False

for i in range(length):
  elm = arr[i]
  
  if(len(stack) == 0 or elm == "(" or elm == "["):
    stack.append(elm)
    continue

  stackCount = len(stack)
  numbers = []
  isExist = False
  target = None
  for target in range(stackCount-1, -1, -1):
    if(stack[target] == "(" or stack[target] == "["):
      isExist = True
      break
    else:
      numbers.append(stack[target])
      stack.pop()
    
  if(isExist == False):
    stack.append(elm)
    continue

  if(elm == ")" and stack[target] == "("):
    stack.pop()
    if(len(numbers) == 0):
      stack.append(2)
    else:
      stack.append(2 * getSum(numbers))
      
  elif(elm == "]" and stack[target] == "["):
    stack.pop()
    if(len(numbers) == 0):
      stack.append(3)
    else:
      stack.append(3 * getSum(numbers))
  else:
    isError = True
    break

if set(stack) & set("()[]"):
  isError = True

if(isError):
  print(0)
else:
  print(getSum(stack))
  


