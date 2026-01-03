def solution(triangle):
  N = len(triangle)
  K = len(triangle[N-1])
  
  board = [[0] * (K+1) for _ in range(N)]
  for row in range(N):
    for col,value in enumerate(triangle[row]):
      # 첫번째 줄
      if(row == 0):
        board[row][col+1] = value
      else:
        board[row][col+1] = value + max(board[row-1][col+1], board[row-1][col])
  
  # 최대값
  return max(board[N-1])