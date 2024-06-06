function solution(n) {
    let arr = [];
    while(n>0) {
        arr.push(n % 10);
        n = Math.floor(n/10)
    }
    return parseInt(arr.sort((a,b) => b-a).join(""));
    
    
    
}