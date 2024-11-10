function solution(a, b) {
    let ans = 0;
    if(a>b){
        [a,b] = [b,a]
    }
    for(let i = a; i <= b; i++){
        ans += i;
    }
    return ans;
}