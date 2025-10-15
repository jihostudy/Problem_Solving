N = int(input()) # 도시의 개수
M = int(input()) # 버스의 개수

# 그래프 입력
graph = {}
for _ in range(M):
  start, end, dist = map(int, input().split(" "))
  if start not in graph:
    graph[start] = []
  graph[start].append((end, dist))

start, end = map(int, input().split(" "))

# 방문할 수 있는 노드 중에서 거리가 가장 짧은 노드 반환
def getMinNode(distances, visited, N):
  minValue = float('inf')
  minNode = 0
  for i in range(1, N + 1):
    if i not in visited and distances[i] < minValue:
      minValue = distances[i]
      minNode = i
  return minNode

# 다익스트라 (순회)
def dijkstra(graph, startNode, endNode, N):
  visited = set()
  distances = [float('inf')] * (N + 1)
  parent = [0] * (N + 1) # 경로 추적용
  distances[startNode] = 0
  
  for _ in range(N):
    node = getMinNode(distances, visited, N)
    
    if node == 0: # 더 이상 방문할 노드가 없을 때
      break
    visited.add(node)
    
    if node in graph: # 해당 노드에서 방문할 수 있는 노드들
      for nextNode, dist in graph[node]:
        cost = distances[node] + dist
        if cost < distances[nextNode]:
          distances[nextNode] = cost
          parent[nextNode] = node # 경로 추적용
  return distances[endNode], parent

result, parent = dijkstra(graph, start, end, N)
# print(parent)
#1. 최소 비용
print(result)

def getPath(parent, start, end):
  path = []
  node = end
  while node != start:
    path.append(node)
    node = parent[node]
  path.append(start)
  path.reverse()
  return path
#2. 경로에 있는 도시의 개수 (출발, 끝 도시 포함)
minPath = getPath(parent, start, end)
print(len(minPath))
#3. 최소 비용 경로 출력
print(" ".join(map(str, minPath)))


  
  
