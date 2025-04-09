N, K = map(int,input().split())

numbers = []
for i in range(N):
    numbers.append(int(input()))

dp = [-1] * (K+1)
dp[0] = 0

# print("초기: ",*dp)
for i in range(1, K+1):
    # print("testing index : {}".format(i))
    minval = -1
    for number in numbers:
        if i-number >= 0 and dp[i-number] != -1:
            # print("들어옴? i-number: {}".format(i-number))
            if(minval == -1):
                minval = dp[i-number]
            else:
                minval = min(minval, dp[i-number])
            # print("최소 업데이트하는 dp[i-number] : {}".format(dp[i-number]))
    if(minval != -1):
        dp[i] = minval + 1
    else:
        dp[i] = minval
    # print(*dp)

print(dp[K])