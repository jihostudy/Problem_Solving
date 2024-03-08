class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # O(NlogN)
        arr = sorted(nums)
        arr_len = len(arr)
        i = 0
        j = arr_len-1
        answer = []        
        # 본격적 검사        
        # O(N)
        while(True):
          addition = arr[i] + arr[j]          
          if(addition < target):
            i+= 1
          elif(addition > target):
            j-= 1
          else:
            # O(N)
            for idx in range(arr_len):
              if(nums[idx] == arr[i] or nums[idx] == arr[j]):
                answer.append(idx)
            return answer
          