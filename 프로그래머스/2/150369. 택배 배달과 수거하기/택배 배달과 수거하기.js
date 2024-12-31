// cap 개수만큼 들고 내려놓는 행위 이후의 배열 반환하기
function updateArray (array, cap,last_index) {
    // stack에서 pop하며, cap까지 담을 때까지 진행
    // console.log(array);
    while(cap > 0 && array.length !== 0) {
        const [idx,val] = array.pop();
        // console.log("idx: ",idx,"val: ",val, "cap: ",cap);
        if(val <= cap){
            cap -= val;
        }
        else if(val > cap) {
            array.push([idx,val-cap]);
            cap = 0;
        }
    }
    // console.log("last: ",array);
    return array;
}
function solution(cap, n, deliveries, pickups) {
    let d_arr = [];
    let p_arr = [];
    for(const [idx,elm] of deliveries.entries()) {
        if(elm !== 0){
            d_arr.push([idx,elm]);
        }
    }
    for(const [idx,elm]  of pickups.entries()) {
        if(elm !== 0){
            p_arr.push([idx,elm]);
        }        
    }
    
    let answer = 0;
    let last_index;
    // console.log(d_arr);
    // console.log(p_arr);
    // console.log();
    while(d_arr.length !== 0 || p_arr.length !== 0) {
        last_index = -1;
        // #1. d_arr / p_arr 중 제일 먼 곳의 index 파악
        if(d_arr.length === 0) {
            last_index = p_arr[p_arr.length -1][0];
        }
        else if(p_arr.length === 0) {
            last_index = d_arr[d_arr.length -1][0];
        }
        else {
            last_index = Math.max(p_arr[p_arr.length -1][0], d_arr[d_arr.length -1][0]);
        }
        // 종료조건
        if(last_index === -1) {
            break;
        }
        // console.log("last_index:",last_index);
        // #2. last_index까지 내려놓기
        answer +=  2 * (last_index + 1); // 거리 최신화
        
        // 1. 내려놓기
        if(d_arr.length !== 0) {
            d_arr = updateArray(d_arr, cap, last_index);    
        }
        // 2. 들기
        if(p_arr.length !== 0) {
            p_arr = updateArray(p_arr,cap, last_index);            
        }
        
        
        // console.log("d_arr: ",d_arr);
        // console.log("p_arr:",p_arr);
        // console.log();
    }
    return answer;
}