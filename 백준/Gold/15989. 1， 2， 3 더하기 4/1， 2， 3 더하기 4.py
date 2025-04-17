testcase = int(input())

maxValue = -float('inf')
testcases = []
for _ in range(testcase):
    value = int(input())
    maxValue = max(maxValue, value)
    testcases.append(value)

#1
dp = [1] * (maxValue + 1)

#2
for i in range(2, maxValue + 1):
    dp[i] = dp[i-2] + dp[i]

#3
for i in range(3, maxValue + 1):
    dp[i] = dp[i-3] + dp[i]

for test in testcases:
    print(dp[test])