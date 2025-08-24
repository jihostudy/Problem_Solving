/**
 * 배열로 이루어진 Heap [ [최소힙 기준요소, 추가값들 ...]]
 */
class MinAbsHeap {
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
      // if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      if (Math.abs(this.heap[parentIndex]) < Math.abs(this.heap[index])) break;
      else if (
        Math.abs(this.heap[parentIndex]) === Math.abs(this.heap[index])
      ) {
        if (this.heap[parentIndex] <= this.heap[index]) {
          break;
        }
      }

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
      if (leftIndex <= this.size()) {
        if (Math.abs(this.heap[leftIndex]) == Math.abs(this.heap[smallest])) {
          if (this.heap[leftIndex] < this.heap[smallest]) {
            smallest = leftIndex;
          }
        } else if (
          Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[smallest])
        ) {
          smallest = leftIndex;
        }
      }
      if (rightIndex <= this.size()) {
        if (Math.abs(this.heap[rightIndex]) == Math.abs(this.heap[smallest])) {
          if (this.heap[rightIndex] < this.heap[smallest]) {
            smallest = rightIndex;
          }
        } else if (
          Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[smallest])
        ) {
          smallest = rightIndex;
        }
      }

      // 위치를 찾은 경우
      if (smallest === index) break;
      // 다음 값들의 절대값이 같은 경우
      // else if (
      //   Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[rightIndex])
      // ) {
      //   smallest =
      //     this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
      // }

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
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(inputs[0]);
const heap = new MinAbsHeap();

const answers = [];
for (let i = 0; i < N; i++) {
  const number = Number(inputs[i + 1]);
  // console.log("number: ", number);

  // push
  if (number !== 0) {
    heap.push(number);
  }
  // 가장 작은 값 출력 + 배열에거 제거
  else {
    const value = heap.pop();
    const answer = value === null ? 0 : value;
    answers.push(answer);

    // console.log("pushing ", answer);
  }
  // console.log(heap.heap);
  // console.log();
}

console.log(answers.join("\n"));
