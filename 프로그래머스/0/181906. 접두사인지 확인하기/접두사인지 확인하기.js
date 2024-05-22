function solution(my_string, is_prefix) {
    const len = is_prefix.length;
    if(len > my_string.length) return 0;
    for (let i = 0; i < len; i++){
        if(my_string[i] != is_prefix[i]){
            return 0;
        }
    }
    return 1;
}