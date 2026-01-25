N, M = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(N)]

# dp[row][col] = [1,1] ~ [row,col]에 속해있는 숫자의 합
dp = [[0] * (N + 1) for _ in range(N + 1)]
for row in range(1, N + 1):
  for col in range(1, N + 1):
    dp[row][col] = dp[row-1][col] + dp[row][col-1] - dp[row-1][col-1] + graph[row-1][col-1]

answers = []
for _ in range(M):
  sRow, sCol, eRow, eCol = map(int, input().split())
  
  # 전체 큰 사각형 - 위쪽 직사각형 - 왼쪽 직사각형 + 두 번 빠진 대각선 부분
  answer = dp[eRow][eCol] - dp[sRow-1][eCol] - dp[eRow][sCol-1] + dp[sRow-1][sCol-1]
  answers.append(answer)

print("\n".join(map(str,answers)))