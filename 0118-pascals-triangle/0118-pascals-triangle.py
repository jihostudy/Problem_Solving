class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
      arr = [[1]]
      if(numRows == 1):
        return arr
      else:
        for row in range(2, numRows + 1):
          target= arr[row - 2]
          arr1 = target.copy()
          arr1.append(0)
          arr2 = target.copy()
          arr2.insert(0,0)
          ans = []
          for i in range(row):
            ans.append(arr1[i] + arr2[i])
          arr.append(ans)
        return arr
      