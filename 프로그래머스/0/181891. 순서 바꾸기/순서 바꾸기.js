function solution(num_list, n) {
    var answer = [];
    
    const left = [];
    const right = [];
    
    for(let i = 0; i < num_list.length; i++) {
        if(i < n){
            left.push(num_list[i]);
        }
        else {
            right.push(num_list[i]);
        }
    }
    
    
    for(let i = 0; i < right.length; i++){
        answer.push(right[i]);
    }
    for(let i = 0; i < left.length; i++){
        answer.push(left[i]);
    }
    return answer;
}