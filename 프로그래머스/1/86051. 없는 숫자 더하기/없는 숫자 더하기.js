function solution(numbers) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(false);
    }
   
    for (let i = 0; i < numbers.length; i++) {
        arr[numbers[i]] = true
    }
    console.log(arr);
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === false){
            ans += i
        }
    }
    
    return ans;
}