function changeToSec(time) {
  const [hour, min] = time.split(':').map(Number);
  return hour * 60 + min;
}

function executeCommand(sec, command, video_sec) {
  if (command === 'next') {
    sec += 10;
    // 범위 넘어가는 경우
    if (sec > video_sec) {
      sec = video_sec;
    }
  } else if (command === 'prev') {
    sec -= 10;
    // 0초 되는 경우
    if (sec < 0) {
      sec = 0;
    }
  }
  return sec;
}
function solution(video_len, pos, op_start, op_end, commands) {
  const len = commands.length;

  // #1. 초 단위로 모두 바꾸기
  const video_sec = changeToSec(video_len);
  let curr_sec = changeToSec(pos);
  const start_sec = changeToSec(op_start);
  const end_sec = changeToSec(op_end);
  // #2. 순회
  let i = -1;
  while (i < len) {
    // Command 실행
    if (i !== -1) {
      curr_sec = executeCommand(curr_sec, commands[i], video_sec);
    }
    // 오프닝 건나뛰기 검사
    if (start_sec <= curr_sec && curr_sec <= end_sec) {
      curr_sec = end_sec;
    }

    i += 1;
  }

  // #3. 출력
  console.log(curr_sec);
  const hour = Math.floor(curr_sec / 60)
    .toString()
    .padStart(2, '0');
  const min = (curr_sec % 60).toString().padStart(2, '0');
  return hour + ':' + min;
}