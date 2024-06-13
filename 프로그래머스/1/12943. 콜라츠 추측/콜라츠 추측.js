function solution(num) {
    let ans = 0;
    while(num != 1){
        ans += 1;
        if(ans == 500){
            return -1;
        }
        if(num % 2) {
            num = 3 * num + 1
        }
        else{
            num /= 2
        }
    }
    return ans
}