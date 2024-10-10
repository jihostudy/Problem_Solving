def solution(brown, yellow):
    sum = ((brown + 4) // 2)
    col = 3
    row = sum - col

    while row >= col:
        if((col-2) * (row-2) == yellow):
            break
        row,col = row-1, col+1
    return [row,col]
