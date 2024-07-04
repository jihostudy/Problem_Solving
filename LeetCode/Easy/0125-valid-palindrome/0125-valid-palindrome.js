var isPalindrome = function (s) {
  const arr = s
    .split("")
    .map((elm) => elm.toLowerCase())
    .filter((t) => (t >= "a" && t <= "z") || (t >= "0" && t <= "9"));
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    if (arr[left] != arr[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
};