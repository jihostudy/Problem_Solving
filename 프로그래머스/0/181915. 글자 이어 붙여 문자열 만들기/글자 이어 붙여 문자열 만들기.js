function solution(my_string, index_list) {   
     const arr = index_list.map((val) => my_string[val]).join("")
    return arr;
}