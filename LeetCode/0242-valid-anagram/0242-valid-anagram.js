/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const count = {}; // 개수를 저장할 객체

  // 조기종료 : 길이가 다름
  if (s.length !== t.length) {
    return false;
  }

  // s 배열
  let elmArray = s.split("");
  for (const elm of elmArray) {
    if (count[elm]) {
      count[elm] += 1;
    } else {
      count[elm] = 1;
    }
  }
  elmArray = t.split("");

  // t 배열
  let answer = true;
  for (const elm of elmArray) {
    const val = count[elm];
    if (val) {
      // 더이상 없는 경우
      if (val <= 0) {
        answer = false;
        break;
      }
      // 남아있는 경우
      count[elm] -= 1;
    }
    // #1. 애초에 없는 경우
    else {
      answer = false;
      break;
    }
  }
  return answer;
};
