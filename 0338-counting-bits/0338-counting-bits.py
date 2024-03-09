class Solution:
    def countBits(self, n: int) -> List[int]:
      ans = None
      if(n == 0):
        ans = [0]
        return ans
      elif(n == 1):
        ans = [0,1]
        return ans
      elif(n >= 2):
        ans = [0,1]
        구간값 = 2
        cnt = 0
        for elmt in range(2,n+1):          
          if(구간값 <= cnt):
            구간값 *= 2
            cnt = 0
          print(구간값, elmt, cnt)
          if(elmt - 구간값 < 구간값 // 2):                    
            ans.append(ans[elmt - (구간값 // 2)])
          else:            
            ans.append(ans[elmt - (구간값 // 2)] + 1)
          cnt += 1          
        return ans