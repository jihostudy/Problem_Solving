class Solution(object):
    def containsDuplicate(self, nums):
        num_map = {}
        for num in nums:
            if num in num_map:
                return True
            num_map[num] = True
        return False