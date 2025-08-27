import sys
input = sys.stdin.readline

n = int(input())
mx1, mx2, mx3 = map(int, input().split())
mn1, mn2, mn3 = mx1, mx2, mx3

for _ in range(n - 1):
    a, b, c = map(int, input().split())
    pmx1, pmx2, pmx3, pmn1, pmn2, pmn3 = mx1, mx2, mx3, mn1, mn2, mn3
    mx1 = a + max(pmx1, pmx2)
    mx2 = b + max(pmx1, pmx2, pmx3)
    mx3 = c + max(pmx2, pmx3)
    mn1 = a + min(pmn1, pmn2)
    mn2 = b + min(pmn1, pmn2, pmn3)
    mn3 = c + min(pmn2, pmn3)
print(max(mx1, mx2, mx3), min(mn1, mn2, mn3))