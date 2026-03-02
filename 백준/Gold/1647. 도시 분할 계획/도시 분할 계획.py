import sys
sys.setrecursionlimit(10**7)
input = sys.stdin.readline

def find(parent, x):
    while parent[x] != x:
        parent[x] = parent[parent[x]]  # path halving
        x = parent[x]
    return x

def union(parent, a, b):
    a = find(parent, a)
    b = find(parent, b)
    if a == b:
        return False
    parent[b] = a
    return True

def main():
    N, M = map(int, input().split())
    edges = []
    for _ in range(M):
        a, b, c = map(int, input().split())
        edges.append((c, a, b))

    edges.sort()  # cost 기준 정렬

    parent = [i for i in range(N + 1)]
    total = 0
    max_edge = 0
    cnt = 0

    for c, a, b in edges:
        if union(parent, a, b):
            total += c
            if c > max_edge:
                max_edge = c
            cnt += 1
            if cnt == N - 1:
                break

    print(total - max_edge)

if __name__ == "__main__":
    main()