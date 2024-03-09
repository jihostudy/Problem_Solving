class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = []
        for elmt in range(n+1):          
          tmp = 0          
          while(elmt != 0):            
            if(elmt % 2 != 0):
              tmp += 1
            elmt //= 2
          ans.append(tmp)        
        return ans