function solution(my_string, index_list) {
    var answer = '';
    const arrlen = index_list.length;
    for (let i = 0; i < arrlen; i++){
        answer += my_string[index_list[i]]
    }
    return answer;
}