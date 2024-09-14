class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        LENGTH = len(nums)
        if(LENGTH == 0):
            return 0
        nums.sort()
        print(nums)
        # [1,2,3,4,100,200]
        longest = 0

        curr_longest = 1
        prev = nums[0]
        for i in range(1,LENGTH):
            num = nums[i]
            if prev + 1 == num:
                curr_longest += 1
            elif prev != num:
                longest = max(curr_longest, longest)
                curr_longest = 1
            prev = num
        # 끝났을 때에도 검사한번 실행
        longest = max(curr_longest, longest)
        return longest