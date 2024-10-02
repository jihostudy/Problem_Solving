function solution(participant, completion) {
  let answer;
  participant.sort();
  completion.sort();
  const len = participant.length;
  for (let i = 0; i < len; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}