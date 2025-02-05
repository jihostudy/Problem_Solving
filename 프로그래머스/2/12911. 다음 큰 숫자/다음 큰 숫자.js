function getOnes(n) {
    let cnt = 0;
    while(n > 0) {
        if(n % 2 === 1) cnt += 1;
        n = Math.floor(n / 2);
    }
    return cnt;
}

function solution(n) {
    let num = n+1;
    
    const target = getOnes(n);
    while(target !== getOnes(num)) {
        num += 1;
    }
    return num;
}