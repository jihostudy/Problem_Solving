#10866번
import sys
I = sys.stdin.readline
N = int(I())
arr = []
for _ in range(N):
    ui = I().split()
    if(ui[0] == "push_back"):
        n = int(ui[1])
        arr.append(n)        
    elif(ui[0] == "push_front"):
        n = int(ui[1])
        arr.insert(0,n)
    elif(ui[0] == "pop_front"):        
        if(len(arr) == 0):
            print("-1")
        else:            
            print(arr[0])
            arr.pop(0)  
    elif(ui[0] == "pop_back"):        
        if(len(arr) == 0):
            print("-1")
        else:
            print(arr[-1])
            arr.pop(-1)  
    elif(ui[0] == "size"):
        print(len(arr))
    elif(ui[0] == "empty"):
        if(len(arr) == 0):
            print("1")
        else:
            print("0")
    elif(ui[0] == "front"):        
        if(len(arr) == 0):
            print("-1")
        else:            
            print(arr[0])
    elif(ui[0] == "back"):
        if(len(arr) == 0):
            print("-1")
        else:            
            print(arr[-1])
    # print(arr)
