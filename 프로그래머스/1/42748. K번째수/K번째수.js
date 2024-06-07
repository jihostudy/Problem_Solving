function solution(array, commands) {
    let ans = [];
    
    // Each TestCase
    for (let testCase = 0; testCase < commands.length; testCase++){        
        let [i,j,k] = [...commands[testCase]];        
        let arr = array.slice(i-1,j);        
        arr.sort((a,b)=>a-b);        
        ans.push(arr[k-1]);
    }
    return ans
}