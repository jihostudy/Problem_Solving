class Solution(object):
    def productExceptSelf(self, nums):        
        length = len(nums)
        left = [1 for _ in range(length)]
        right =[1 for _ in range(length)]
        #1. Left 만들기
        for i in range(1, length):
            left[i]=nums[i-1]*left[i-1]
        #2. Right 만들기
        for i in range(length-2, -1, -1):
            right[i] = nums[i+1]*right[i+1]
        #3. 결과 만들기
        return [left[i] * right[i] for i in range(length)]