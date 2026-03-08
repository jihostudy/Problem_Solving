# https://www.acmicpc.net/problem/1647
# 임스와 함께하는 미니게임, 실버5

import sys
import copy
from collections import deque, defaultdict
from typing import List


inputs = list(input().split(" "))
N = int(inputs[0])
input_game = inputs[1]

game_needs = {
  'Y' : 1,
  'F' : 2,
  'O' : 3
}

needs = game_needs[input_game]
# print(f"needs : {needs}")
played = set()

count = 0
tmp = 0
for _ in range(N):
  game = input()
  
  if game not in played:
    tmp += 1
    played.add(game)
    
    if tmp == needs:
      count += 1
      tmp = 0

print(count)