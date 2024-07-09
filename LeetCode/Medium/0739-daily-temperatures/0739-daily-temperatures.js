var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;

  const idx_stack = [];
  const output = new Array(len).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const target = temperatures[i];
    while (
      idx_stack.length > 0 &&
      target > temperatures[idx_stack[idx_stack.length - 1]]
    ) {
      const idx = idx_stack.pop();
      output[idx] = i - idx;
    }
    idx_stack.push(i);
  }
  return output;
};