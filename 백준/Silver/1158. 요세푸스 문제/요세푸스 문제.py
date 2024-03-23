#1158번
N, K = map(int, input().split())
arr = [i+1 for i in range(N)]
ans = []

arr_len = N # 보존 
ti = 0 #target_index
cnt = 0
while(len(ans) < arr_len):        
    cnt += 1                
    if(cnt == K):
        ans.append(arr[ti])            
        arr.pop(ti)
        N -= 1 #길이 1제거        
        cnt = 0     
    else:
        ti = (ti + 1) % N        
    
    
print("<",end="")
for i in range(arr_len):
    if(i == arr_len-1):
        print(ans[i], end="")
    else:
        print(str(ans[i]) + ", ",end="")
print(">", end="")