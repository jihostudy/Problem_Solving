function solution(n) {
    const max = parseInt(Math.sqrt(n))
    for (let i = max; i >= 1; i--){
        if(i ** 2 == n) {
            return (i+1) ** 2
        }        
    }   
    return -1
}