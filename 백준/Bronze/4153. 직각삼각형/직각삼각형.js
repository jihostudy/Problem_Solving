var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
 
for(let line of inputs) {
  let values = line.split(' ').map(el => parseInt(el));
 
  if(values[0] === 0) break;
  // 정렬을 하는 이유는 제일 큰 숫자가 빗변이기 때문에.
  values.sort((a, b) => {
    return a - b;
  });
 
  // a^2+b^2=c^2이 성립하여야 직각이다.
  if((values[0] * values[0]) + (values[1] * values[1]) === (values[2] * values[2])) {
    console.log("right")
  } else {
    console.log("wrong")
  }
}