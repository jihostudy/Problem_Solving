function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(true) {
        answer += numbers[i];
        if(answer > n) {
            
            break;
        }
        i++;
    }
    return answer;
}