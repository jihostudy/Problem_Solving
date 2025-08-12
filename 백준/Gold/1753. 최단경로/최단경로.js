/**
 * 배열로 이루어진 Heap [ [최소힙 기준요소, 추가값들 ...]]
 */
class MinHeap {
  constructor() {
    this.heap = [null]; // index 0 비움
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    this._bubbleDown();

    return min;
  }

  size() {
    return this.heap.length - 1;
  }

  _bubbleUp() {
    let index = this.size();

    while (index > 1) {
      let parentIndex = Math.floor(index / 2);

      // 첫 번째 요소(우선순위) 비교
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      // if (this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _bubbleDown() {
    let index = 1;

    while (true) {
      let leftIndex = index * 2;
      let rightIndex = index * 2 + 1;
      let smallest = index;

      if (
        leftIndex <= this.size() &&
        // this.heap[leftIndex] < this.heap[smallest]
        this.heap[leftIndex][0] < this.heap[smallest][0]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex <= this.size() &&
        // this.heap[rightIndex] < this.heap[smallest]
        this.heap[rightIndex][0] < this.heap[smallest][0]
      ) {
        smallest = rightIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const [N, E] = inputs[0].split(" ").map(Number); // N(노드), E(간선)
const startNode = Number(inputs[1]);

let graph = {}; // 시작노드 : [[도착노드, 거리] , [도착노드, 거리]] 형태
for (let i = 0; i < E; i++) {
  const [u, v, weight] = inputs[2 + i].split(" ").map(Number);
  if (!graph[u]) {
    graph[u] = [];
  }
  graph[u].push([v, weight]);
}

// 아직 방문하지 않았고, 방문할 수 있는 노드중에 최단거리인 노드
// const getMinNode = (visited, distances, N) => {
//   let [minNode, minDist] = [-1, Infinity];

//   for (let i = 1; i < N + 1; i++) {
//     if (!visited.has(i) && minDist > distances[i]) {
//       minNode = i;
//       minDist = distances[i];
//     }
//   }
//   return minNode;
// };

const dijkstra = (graph, N, startNode) => {
  const visited = new Set(); // 방문 여부
  const distances = new Array(N + 1).fill(Infinity); // 최단 거리
  const heap = new MinHeap(); // [거리, 노드]
  heap.push([0, startNode]);
  // console.log(heap.heap);

  distances[startNode] = 0;

  while (heap.size() > 0) {
    // console.log(heap.heap);
    const [dist, node] = heap.pop();

    if (visited.has(node) || dist > distances[node]) continue;
    visited.add(node);

    if (graph[node]) {
      for (let [neighbor, weight] of graph[node]) {
        const newDist = dist + weight;
        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          heap.push([newDist, neighbor]);
        }
      }
    }
  }
  return distances;

  // for (let i = 0; i < N; i++) {
  //   const node = getMinNode(visited, distances, N);
  //   const distance = distances[node];

  //   // 1. 방문처리
  //   if (node === -1) break; // 더이상 방문할 노드가 없음

  //   visited.add(node);

  //   // 2. 거리 최신화
  //   if (graph[node]) {
  //     for (const [neighbor, weight] of graph[node]) {
  //       const newDist = distance + weight;
  //       if (distances[neighbor] > newDist) {
  //         distances[neighbor] = newDist;
  //       }
  //     }
  //   }
  //   // console.log(distances);
  //   // console.log(visited);

  //   // console.log();
  // }

  // console.log(distances);
};

// console.log(dijkstra(graph, N, startNode));

console.log(
  dijkstra(graph, N, startNode)
    .slice(1)
    .map((val) => (val === Infinity ? "INF" : val))
    .join("\n")
);
