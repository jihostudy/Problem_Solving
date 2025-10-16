def DFS(row, col, number):
  # 종료 조건
  if len(number) == 6:
    if number not in result: 
      result.append(number)
    return
      
  drow = [1, -1, 0, 0] 
  dcol = [0, 0, 1, -1] 
  for i in range(4):
    nrow = row + drow[i]
    ncol = col + dcol[i]
      
    if 0 <= nrow < 5 and 0 <= ncol < 5: 
      DFS(nrow, ncol, number + board[nrow][ncol]) 

#입력
board = [list(map(str, input().split())) for _ in range(5)]

result = []
for i in range(5):
  for j in range(5):
    DFS(i, j, board[i][j])

# 결과 출력
print(len(result))