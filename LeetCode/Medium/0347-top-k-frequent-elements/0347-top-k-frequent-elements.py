# Top K Frequent Elements
class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        #Example
        # Input: nums = [1, 1, 1, 2, 2, 3], k = 2
        # Output: [1, 2]
        set = {}
        for num in nums:
            set[num] = set.get(num,0) + 1
        carr = []
        for key,value in set.items():
            carr.append([key,value])
        carr.sort(reverse=True, key=lambda x: x[1])
        answer = []
        cnt = 0
        for arr in carr:
            answer.append(arr[0])
            cnt += 1
            if(cnt  == k):
                break
        return answer