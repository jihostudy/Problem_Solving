function solution(phone_book) {
  const table = {};
  for (const phone of phone_book) {
    table[phone] = true;
  }

  for (const phone of phone_book) {
    const len = phone.length;
    for (let i = 1; i < len; i++) {
      const substr = phone.substring(0, i);
      if (table[substr] === true) {
        return false;
      }
    }
  }

  return true;
}