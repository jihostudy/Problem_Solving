var characterReplacement = function (s, k) {
  var map = [26];

  let [largestCount, left, maxlen] = [0, 0, 0];

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    map[c] = (map[c] || 0) + 1;

    largestCount = Math.max(largestCount, map[c]);

    if (right - left + 1 - largestCount > k) {
      map[s[left]] -= 1;
      left += 1;
    }

    maxlen = Math.max(maxlen, right - left + 1);
  }
  return maxlen;
};