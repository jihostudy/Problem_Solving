function solution(arr) {
    let i = 0, arrLen = arr.length;
    let answer = [];
    for (i = 0; i < arrLen; i++) {
        if(arr[i] >= 50 && arr[i] % 2 == 0) {
            answer.push(Math.floor(arr[i] / 2));
        }
        else if(arr[i] < 50 && arr[i] % 2 == 1) {
            answer.push(arr[i] * 2);
        }
        else {
            answer.push(arr[i]);
        }
    }
    return answer;
}