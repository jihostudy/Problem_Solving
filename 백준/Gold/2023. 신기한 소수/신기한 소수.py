import math

N = int(input())

def isPrime(num):
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

# nums : [23,29] 처럼 배열에서 자릿수를 올린 만족하는 숫자 구하기
def getNewNums(nums):
    newNums = []
    for num in nums:
        for i in range(num * 10, num * 10 + 10):
            if i % 2 != 0 and isPrime(i):
                newNums.append(i)
    return newNums



dp = [-1] * 10

# num : 자릿수
dp[2] = [2]
dp[3] = [3]
dp[5] = [5]
dp[7] = [7]

# print("초기 dp: {}".format(dp))

for num in range(2,N+1):
    for i in range(0,10):
        if dp[i] != -1:
            nums = dp[i]
            newNums = getNewNums(nums)
            dp[i] = newNums
    # print("자릿수 : {}, dp: {}".format(num, dp))
# 정답 출력
answer = []
for i in range(10):
    if(dp[i] != -1):
        for num in dp[i]:
            print(num)


