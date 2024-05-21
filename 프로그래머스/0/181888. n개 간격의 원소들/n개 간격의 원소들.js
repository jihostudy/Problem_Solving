function solution(num_list, n) {
    var answer = [];
    const arrLen = num_list.length;
    let i = 0;
    let cnt = 0;
    for (; i < arrLen; i++) {
        if(cnt == 0){
            answer.push(num_list[i]);
        }
        cnt = (cnt + 1) % n;
    }
    return answer;
}