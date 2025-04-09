# 브론즈1

N, M = map(int, input().split())

#최대 공약수
minValue = min(N,M)

val = 1
for i in range(1,minValue + 1):
    if (N % i == 0) and (M % i == 0):
        val = i
        # print("{} is divided by {}".format(i, val))

print(val)
#최소 공배수
print((N // val) * (M // val) * val)