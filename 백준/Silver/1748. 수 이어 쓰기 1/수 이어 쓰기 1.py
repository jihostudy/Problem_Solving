
input = input()
len = len(input)

number = int(input)

answer = 0
#1. 완전히 다 들어간거 더하기
for i in range(1,len,1):
    answer += i * 9 * 10**(i-1)

#2. 나머지 더하기
number -= 10**(len-1)
answer += len * (number + 1)

print(answer)
