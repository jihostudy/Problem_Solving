/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 1. 각 문자열 오름차순 정렬
  const sortedStrs = strs.map((str) => {
    const arr = str.split("").sort().join("");
    return arr;
  });

  // 2. 각 문자열에 대해 정답 만들기
  const targets = []; // str 단일 ["ate", "atn"]
  const answers = []; // strs 기반의 실제 정답 [ ["ate","tae","eat"], ["nat", "tan"] ...]
  for (let strIndex = 0; strIndex < strs.length; strIndex++) {
    const elm = sortedStrs[strIndex]; // 위치를 찾으려는 요소

    let isExist = false;
    for (let i = 0; i < targets.length; i++) {
      const target = targets[i]; // 타켓 요소
      // 같은 값 존재
      if (elm === target) {
        answers[i].push(strs[strIndex]);
        isExist = true;
      }
    }
    if (!isExist) {
      targets.push(sortedStrs[strIndex]);
      answers.push([strs[strIndex]]);
    }
  }
  return answers;
};