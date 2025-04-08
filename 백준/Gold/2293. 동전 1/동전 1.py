N, K = map(int, input().split())

numbers = []
for i in range(N):
    numbers.append(int(input()))

arr = [0] * (K+1)
arr[0] = 1

for number in numbers:
    for i in range(number, K+1):
        arr[i] = arr[i] + arr[i-number]
print(arr[K])