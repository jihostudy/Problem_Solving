import sys

# Python의 기본 재귀 깊이 제한은 1000입니다.
# k가 2500까지 가능하므로, 재귀 깊이 제한을 넉넉하게 늘려야 합니다.
sys.setrecursionlimit(3000) 

# (n, m) 격자, (x, y) 시작, (r, c) 도착, k 스텝
def solution(n, m, x, y, r, c, k):
    answer = "impossible"

    # --- 1. 시작 전, k 스텝으로 도달 가능한지 미리 확인 ---
    
    # (x,y)에서 (r,c)까지의 최단 거리 (맨해튼 거리)
    min_dist = abs(x - r) + abs(y - c)
    
    # (k < min_dist): k 스텝 안에 최소 거리만큼도 못 가는 경우
    # (k - min_dist) % 2 != 0: 
    #   남은 스텝(k - min_dist)이 짝수가 아니면 'rl' 또는 'ud' 왕복으로 스텝을 채울 수 없음
    if k < min_dist or (k - min_dist) % 2 != 0:
        return "impossible"

    # --- 2. DFS 탐색 (사전 순: d, l, r, u) ---
    
    # (dx, dy, move_char)
    # d, l, r, u 알파벳 순서대로 정의
    moves = [(1, 0, 'd'), (0, -1, 'l'), (0, 1, 'r'), (-1, 0, 'u')]
    
    # answer 변수를 nonlocal로 참조하기 위해 리스트 대신 nonlocal 키워드 사용
    
    def dfs(curr_x, curr_y, path):
        nonlocal answer # solution 함수의 answer 변수를 직접 수정
        
        # 1. (가지치기) 이미 답을 찾았으면 (사전 순 가장 빠른 답) 즉시 종료
        #    (d..로 시작하는 답을 찾으면 l..로 시작하는 경로는 볼 필요 없음)
        if answer != "impossible":
            return
            
        # 2. 현재까지 온 스텝 수
        steps_taken = len(path)
        
        # 3. (종료 조건) k 스텝을 모두 사용했을 때
        if steps_taken == k:
            if curr_x == r and curr_y == c:
                answer = path # 목적지에 도달했다면 정답 갱신
            return # k 스텝 다 썼으면 무조건 종료

        # 4. (핵심 가지치기) 남은 스텝으로 목적지 도달이 불가능하면 종료
        remaining_steps = k - steps_taken
        dist_to_target = abs(curr_x - r) + abs(curr_y - c)
        
        if remaining_steps < dist_to_target or (remaining_steps - dist_to_target) % 2 != 0:
            return # 불가능한 경로이므로 탐색 중단

        # 5. (재귀 탐색) d, l, r, u 순서대로 다음 스텝 진행
        for dx, dy, move_char in moves:
            next_x, next_y = curr_x + dx, curr_y + dy
            
            # 격자 범위 확인
            if 1 <= next_x <= n and 1 <= next_y <= m:
                # 다음 경로 탐색
                dfs(next_x, next_y, path + move_char)
                
                # 재귀에서 복귀했을 때, 만약 답을 찾았다면
                # (예: 'd'로 시작하는 경로에서 답을 찾았다면)
                # 'l', 'r', 'u'로 시작하는 경로는 더 이상 탐색할 필요가 없으므로
                # 현재 dfs 함수를 즉시 종료합니다.
                if answer != "impossible":
                    return

    # DFS 시작
    dfs(x, y, "")
    
    return answer