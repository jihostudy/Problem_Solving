import sys

# arr 구성하기
arr = [0] * 13
arr[0] = '-'
for N in range(1,13):
    arr[N] = arr[N-1] + " " * (3**(N-1)) + arr[N-1]


for line in sys.stdin:
    if line.strip() == "":
        continue
    num = int(line)
    print(arr[num])