class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        answer = []
        nums_len = len(nums)
        for i in range(nums_len):
            for j in range(i+1, nums_len):
                if(nums[i] + nums[j] == target):                    
                    answer.append(i)
                    answer.append(j)
                    return answer