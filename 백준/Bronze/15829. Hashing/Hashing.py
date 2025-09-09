N = int(input())
letters = list(input())

# print(N,letters)

answer = 0
r = 31
M = 1234567891

dp = 1
for letter in letters:
  asciiCode = ord(letter)-96
  answer = (answer + (asciiCode * dp)) % M
  dp = (dp * r) % M
print(answer)