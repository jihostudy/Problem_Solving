function findTreeLength(tree, v1, v2, n) {
  let queue = [];
  let visited = new Array(n + 1).fill(false);

  queue.push(1);
  visited[1] = true;

  while (queue.length !== 0) {
    const node = queue.shift();

    const connectedNodes = tree[node];

    for (const targetNode of connectedNodes) {
      // 제외한 노드
      if (
        (node === v1 && targetNode === v2) ||
        (node === v2 && targetNode === v1)
      ) {
        continue;
      }
      // 제외하지 않은 노드
      if (!visited[targetNode]) {
        queue.push(targetNode);
        visited[targetNode] = true;
      }
    }
    // console.log(queue);
  }
  // console.log();

  // #2. 결과 출력
  let cnt = 0;
  for (let i = 1; i < n + 1; i++) {
    if (visited[i] === true) {
      cnt += 1;
    }
  }
  return cnt;
}

function solution(n, wires) {
  let min = Number.MAX_SAFE_INTEGER;

  // #1. tree 만들기
  let tree = {};
  for (const wire of wires) {
    const [v1, v2] = wire;
    // v1
    if (tree[v1] === undefined) {
      tree[v1] = [v2];
    } else {
      tree[v1].push(v2);
    }
    // v2
    if (tree[v2] === undefined) {
      tree[v2] = [v1];
    } else {
      tree[v2].push(v1);
    }
  }
  // console.log(tree);

  for (let removeIndex = 0; removeIndex < n - 1; ++removeIndex) {
    const [v1, v2] = wires[removeIndex];

    // console.log("removing index:", removeIndex, "v1: ", v1, "v2: ", v2);

    const tree1 = findTreeLength(tree, v1, v2, n);

    const tree2 = n - tree1;
    // console.log("tree1: ", tree1, "tree2: ", tree2);
    // console.log("절대값 차이 : ", Math.abs(tree1 - tree2));

    min = Math.min(min, Math.abs(tree1 - tree2));
  }
  return min;
}