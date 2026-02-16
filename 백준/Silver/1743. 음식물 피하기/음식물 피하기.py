from collections import deque
import sys

input = sys.stdin.readline

n, m, k = map(int, input().strip().split())
arr = [[0] * m for _ in range(n)]

for _ in range(k):
    r, c = map(int, input().strip().split())
    arr[r - 1][c - 1] = 1


d = [(0, 1), (0, -1), (1, 0), (-1, 0)]


def bfs(y, x):
    q = deque()
    q.append((y, x))
    arr[y][x] = 0  # 쓰레기 치웠다는 의미 (=방문했다는 의미)
    cnt = 0
    while q:
        y, x = q.popleft()
        cnt += 1
        for dy, dx in d:
            Y, X = y + dy, x + dx
            if (0 <= Y < n) and (0 <= X < m) and arr[Y][X] == 1:
                arr[Y][X] = 0
                q.append((Y, X))

    return cnt


result = 1
for y in range(n):
    for x in range(m):
        if arr[y][x] == 1:
            # print(bfs(y, x))
            result = max(result, bfs(y, x))

print(result)