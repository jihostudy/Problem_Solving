import math
A, B, V = list(map(int,input().split(" ")))
# 낮에 A 올라감, 밤에 B 미끄러짐, V미터 막대 올라가고 싶음
diff = A - B

target = V - A
print(1+ math.ceil(target / diff))
