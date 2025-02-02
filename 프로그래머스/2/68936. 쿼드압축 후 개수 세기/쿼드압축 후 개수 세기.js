function solution(arr) {
  const len = arr.length;
  // startRow, startCol 부터 Length 만큼 쪼개기
  // [0개수, 1개수 반환]
  function recursive(srow, scol, length) {
    // Case0: length == 1인 종료 조건

    const [erow, ecol] = [srow + length, scol + length];

    let first_number;
    let isAllSame = true;
    Outer: for (let row = srow; row < erow; ++row) {
      for (let col = scol; col < ecol; ++col) {
        const elm = arr[row][col];

        // Case1: 첫번쨰 숫자를 저장
        if (first_number === undefined) {
          first_number = elm;
          continue;
        }
        // Case2: 첫번쨰 숫자가 있는 경우
        if (first_number !== elm) {
          isAllSame = false;
          break Outer;
        }
      }
    }

    // console.log("모두 같나요? : ", isAllSame);
    // console.log("원소: ", first_number);

    // 모두가 동일
    if (isAllSame) {
      // console.log("returns: ", first_number === 0 ? [1, 0] : [0, 1]);

      return first_number === 0 ? [1, 0] : [0, 1];
    }
    // 모두가 동일하지 않음 (더 쪼개야 함)
    const r1 = recursive(srow, scol, length / 2);
    const r2 = recursive(srow, scol + length / 2, length / 2);
    const r3 = recursive(srow + length / 2, scol, length / 2);
    const r4 = recursive(srow + length / 2, scol + length / 2, length / 2);
    const zeroCnt = r1[0] + r2[0] + r3[0] + r4[0];
    const oneCnt = r1[1] + r2[1] + r3[1] + r4[1];
    // console.log("쪼갠 것 returning :", [zeroCnt, oneCnt]);
    // console.log();

    return [zeroCnt, oneCnt];
  }

  return recursive(0, 0, len);
}