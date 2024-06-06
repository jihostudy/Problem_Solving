function solution(arr) {
    let ans = 0;
    arr.forEach((elm) => ans += elm);
    return ans / arr.length;
}