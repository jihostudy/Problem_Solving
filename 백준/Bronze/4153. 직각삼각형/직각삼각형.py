while(True):
  numbers = list(map(int, input().split(" ")))
  numbers.sort()
  a,b,c = numbers
  
  if(a == 0):
    break
  if(c**2 == a **2 + b ** 2) :
    print("right")
  else:
    print("wrong")
  