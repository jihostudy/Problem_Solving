N, D = map(int, input().split())
path = []

#1. 값 저장
dpSet = set()
dpSet.add(0)
dpSet.add(D)
for i in range(N):
    start,end,distance = list(map(int, input().split()))
    if(end > D):
        continue
    if(start not in dpSet):
        dpSet.add(start)
    if(end not in dpSet):
        dpSet.add(end)
    path.append([start,end,distance])

# print("path: {}".format(path))
locations = list(dpSet)
locations.sort()
dp = [0] * len(locations)


#2. 도착지점별로 시작
for i in range(1, len(locations)):
    currLocation = locations[i]
    minLength = (currLocation - locations[i-1]) + dp[i-1] # 일단 최소: 직전 거리
    for j in range(0,len(path)):
        tStart, tEnd, tDistance = path[j]
        # 도착지점이 현재 구하는 거리인 경우
        if(tEnd == currLocation):
            # 시작점의 dp값 찾기
            tStartDp = None
            for idx in range(len(locations)):
                if(locations[idx] == tStart):
                    tStartDp = dp[idx]


            minLength = min(minLength, tStartDp + tDistance) # 전까지의 거리 + 지름길 거리로 최소
    dp[i] = minLength
# print("locations: {}".format(locations))
# print("dp: {}".format(dp))
print(dp[-1])
