function solution(my_string, is_suffix) {
    const suffixLen = is_suffix.length;
    const stringLen = my_string.length;
    if(suffixLen > stringLen) return 0;
    
    for(let i = 0; i < suffixLen; i++){        
        if(my_string[stringLen-i-1] != is_suffix[suffixLen-i-1]){            
            return 0;
        }
    }
    return 1;
}