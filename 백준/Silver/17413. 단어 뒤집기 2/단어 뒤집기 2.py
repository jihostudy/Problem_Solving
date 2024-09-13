input = input("")
length = len(input)

isOpen = False
word = []
answer = ""

for letter in input:    
    if letter == "<":
         # 열려 있던 상태
        if(isOpen == False):
            if(len(word) != 0): #무언가 더한 문자가 있었음                
                word.reverse()
                answer += "".join(word)
                word = []
        answer += letter
        isOpen = not isOpen


    elif letter == ">":
        answer += letter
        isOpen = not isOpen


    else:
        if(isOpen == True):
            answer += letter
        else:
            # 공백이 아닐때까지 더한다
            if(letter != " "):
                word.append(letter)                
            # 공백인 경우
            else:
                word.reverse()                
                answer += "".join(word)
                word = []
                answer += " "                    
if(len(word) != 0):
    word.reverse()
    answer += "".join(word)
print(answer)