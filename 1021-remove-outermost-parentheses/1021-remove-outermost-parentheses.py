class Solution:
    def removeOuterParentheses(self, s: str) -> str:
      input = ""
      output = ""      
      left_p = []      
      for idx in range(len(s)):
        elmt = s[idx]
        input += elmt        
        if(elmt == "("):
          left_p.append(idx)
        elif(elmt == ")"):
          # decomposition 완성되는 경우
          if(len(left_p) == 1):            
            output += input[1:-1]
            input = ""                                 
          left_p.pop(-1)
      return output
