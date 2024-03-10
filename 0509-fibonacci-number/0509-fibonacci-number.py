class Solution:
    def fib(self, n: int) -> int:
        
        if(n == 0):
          return 0
        elif(n == 1):
          return 1
        else:          
          arr = [0] * (n+1)
          arr[0] = 0
          arr[1] = 1
          for idx in range(2, n+1):
            arr[idx] = arr[idx-1] + arr[idx-2]
          return arr[n]
          