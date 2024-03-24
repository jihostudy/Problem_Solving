#2108번
import sys 
I = sys.stdin.readline
N = int(I())
arr = []
for _ in range(N):    
    arr.append(int(I()))

ls = sorted(arr)
ans = sum(ls) / N
#1. 산술평균
print(round(ans))

#2. 중앙값
print(ls[(N-1) // 2])

#3. 최빈값
dic=dict()
for i in ls:#빈도수 구하기
    if i in dic:
        dic[i]+=1
    else:
        dic[i]=1
mx = max(dic.values())    
mx_dic = []

for i in dic:
    if (mx==dic[i]):
        mx_dic.append(i)
        
if(len(mx_dic) > 1):
    print(mx_dic[1])
else:
    print(mx_dic[0])

#4. 범위
print(ls[-1] - ls[0])