class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # Input:
        # nums = [1,2,3,4]
        # left : [1,1,2,6]
        # right: [24,12,4,1]
        length = len(nums)
        left = [1 for _ in range(length)]
        right =[1 for _ in range(length)]
        #1. Left 만들기
        for i in range(1, length):
            left[i]=nums[i-1]*left[i-1]
        #2. Right 만들기
        for i in range(length-2, -1, -1):
            right[i] = nums[i+1]*right[i+1]
        for i in range(length):
            left[i] *= right[i]
        return left
        