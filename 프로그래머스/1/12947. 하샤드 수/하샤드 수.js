function solution(x) {
    const save = x;
    let div = 0;
    while(x > 0) {
        div += x % 10;
        x = Math.floor(x / 10);
    }
    console.log(div);
    return save % div == 0 ? true:false
}