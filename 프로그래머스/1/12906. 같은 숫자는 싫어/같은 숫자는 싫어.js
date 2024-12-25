function solution(arr)
{
    let answer = [];
    for(const [idx,elm] of arr.entries()) {
        const bef_idx = idx - 1;
        if(bef_idx < 0){
            answer.push(elm);
        }
        else if(arr[bef_idx] === elm) {
            continue;   
        }
        else {
            answer.push(elm);
        }
    }
    

    
    
    return answer;
}