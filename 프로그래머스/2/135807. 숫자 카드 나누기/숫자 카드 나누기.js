function solution(arrayA, arrayB) {
  // #1. 각 배열의 공약수 모두 구하기
  let arrA = [];
  let arrB = [];

  const A_Min = arrayA.sort((a, b) => a - b)[0];
  const B_Min = arrayB.sort((a, b) => a - b)[0];

  Outer: for (let i = 2; i <= A_Min; i++) {
    for (const elm of arrayA) {
      if (elm % i !== 0) {
        continue Outer;
      }
    }
    arrA.push(i);
  }

  Outer: for (let i = 2; i <= B_Min; i++) {
    for (const elm of arrayB) {
      if (elm % i !== 0) {
        continue Outer;
      }
    }
    arrB.push(i);
  }

  // #2-1. A의 공약수지만, B에는 포함되지 않은 최대수
  let A_Max;
  // console.log("arrA: ", arrA);

  Outer: for (const elm of arrA) {
    for (const num of arrayB) {
      if (num % elm === 0) {
        continue Outer;
      }
    }
    // console.log("updating A_Max to ", elm);

    A_Max = elm;
  }
  // console.log("A_Max: ", A_Max);

  // #2-2. B의 공약수지만, A에는 포함되지 않은 최대수
  let B_Max;

  // console.log("arrB: ", arrB);

  Outer: for (const elm of arrB) {
    for (const num of arrayA) {
      if (num % elm === 0) {
        continue Outer;
      }
    }
    // console.log("updating B_Max to ", elm);
    B_Max = elm;
  }
  // console.log("B_Max: ", B_Max);

  // #3. 정답 출력
  if (A_Max === undefined && B_Max === undefined) {
    return 0;
  } else if (A_Max === undefined && B_Max !== undefined) {
    return B_Max;
  } else if (A_Max !== undefined && B_Max === undefined) {
    return A_Max;
  } else if (A_Max !== undefined && B_Max !== undefined) {
    return Math.max(A_Max, B_Max);
  }
}