class Solution(object):
    def isAnagram(self, s, t):
        dict = {}
        # 데이터 쌓기
        for char in s:
            dict[char] = dict.get(char, 0) + 1
        for char in t:
            val = dict.get(char, -1)
            if(val == (-1 or 0)):
                return False
            if(val == 1):
                del dict[char]
            else:
                dict[char] = val-1
        # 남아있는게 있다
        if(len(dict) != 0) :
            return False
        return True