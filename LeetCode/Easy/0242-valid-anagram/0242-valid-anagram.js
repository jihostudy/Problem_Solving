/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const [sArr, tArr] = [s.split(""), t.split("")];
  sArr.sort();
  tArr.sort();

  const len = sArr.length;
  if (sArr.length !== tArr.length) return false;
  for (let i = 0; i < len; i++) {
    if (sArr[i] != tArr[i]) {
      return false;
    }
  }
  return true;
};

