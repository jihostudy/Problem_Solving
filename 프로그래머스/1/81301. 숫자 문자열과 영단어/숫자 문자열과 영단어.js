function solution(s) {
  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  const arr = s.split("");
  const sLen = arr.length;

  let answer = "";

  let letters = "";
  for (const value of arr) {
    // Case1: 숫자인 경우
    if (value >= "0" && value <= "9") {
      answer += value;
    }
    // Case2: 문자인 경우
    else {
      letters += value;

      let isExist = Object.values(obj).findIndex((val) => val === letters);
      // 존재하는 경우
      if (isExist !== -1) {
        answer += isExist;
        // 초기화
        letters = "";
      }
    }
  }
  return parseInt(answer);
}
