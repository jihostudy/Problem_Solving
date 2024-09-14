class Solution(object):
    # 배열이 1~9 하나씩만 가지고 있는지 판단하는 코드
    def isValid(self, array):
        s = set()
        for num in array:
            if(num != "."):
                if num not in s:
                    s.add(num)
                else:
                    return False
        return True


    def isValidSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: bool
        """
        LENGTH = 9
        #1. 가로 배열이 Valid한지 판단
        for row in range(LENGTH):
            arr = board[row]
            if self.isValid(arr) == False:
                return False
        #2. 세로 배열이 Valid한지 판단
        for col in range(LENGTH):
            arr = [board[row][col] for row in range(LENGTH)]
            if self.isValid(arr) == False:
                return False
        #3. 3 * 3 배열이 Valid 한지 판단
        i, j = 0, 0
        while(i < 3):
            arr = [board[row][col] for row in range(3*i, 3*(i+1)) for col in range (3*j, 3*(j+1))]
            if self.isValid(arr) == False:
                return False
            j += 1
            if(j==3):
                i += 1
                j = 0
        return True
