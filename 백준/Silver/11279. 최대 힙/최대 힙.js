/**
 * 배열로 이루어진 Heap [ [최소힙 기준요소, 추가값들 ...]]
 */
class MaxHeap {
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

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();
    this._bubbleDown();

    return max;
  }

  size() {
    return this.heap.length - 1;
  }

  _bubbleUp() {
    let index = this.size();

    while (index > 1) {
      let parentIndex = Math.floor(index / 2);

      // 첫 번째 요소(우선순위) 비교
      // if (this.heap[parentIndex][0] >= this.heap[index][0]) break;
      if (this.heap[parentIndex] >= this.heap[index]) break;

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
      let largest = index;

      if (
        leftIndex <= this.size() &&
        this.heap[leftIndex] > this.heap[largest]
        // this.heap[leftIndex][0] < this.heap[largest][0]
      ) {
        largest = leftIndex;
      }
      if (
        rightIndex <= this.size() &&
        this.heap[rightIndex] > this.heap[largest]
        // this.heap[rightIndex][0] < this.heap[largest][0]
      ) {
        largest = rightIndex;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}

// 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const inputs = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const N = Number(inputs[0]);
// console.log(N);

let answer = [];

const nums = inputs.slice(1).map(Number);

const heap = new MaxHeap();
for (const num of nums) {
  // 배열에서 가장 큰 값을 출력하고 그 값을 배열에서 제거
  if (num === 0) {
    const max = heap.pop();
    if (max === null) {
      answer.push(0);
    } else {
      answer.push(max);
    }
  }
  // x가 자연수라면 배열에 x라는 값을 넣는
  else {
    heap.push(num);
  }
}

console.log(answer.join("\n"));
