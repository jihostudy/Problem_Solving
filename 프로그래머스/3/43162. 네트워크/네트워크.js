function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false); // 방문 배열
    
    for (let n_com = 0; n_com < n; n_com++) {
        // console.log("Checking computer number: ",n_com);
        if(visited[n_com] == false){
            visited[n_com] = true;
            BFS(n,computers,visited,n_com);
            answer += 1;
        }
    }
    return answer;
}

function BFS(n,computers,visited,num_computer) 
{
    const queue = [num_computer];    
    const network = [num_computer];
    while(queue.length != 0) {
        const row = queue.shift();
        visited[row] = true;
        for(let col=0; col < n; col++) {
            if(computers[row][col] == 1 && visited[col] == false) {
                queue.push(col);                
                network.push(col);
            }
                
        }
    }
    // console.log("network :",network);
}