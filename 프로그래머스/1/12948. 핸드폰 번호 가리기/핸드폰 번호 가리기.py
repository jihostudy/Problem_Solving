def solution(phone_number):
    ans = ""
    arrLen = len(phone_number)
    for i in range(arrLen):
        if(i < arrLen -4):
            ans += "*"
        else:
            ans += phone_number[i]
    print(ans)
    
    return ans