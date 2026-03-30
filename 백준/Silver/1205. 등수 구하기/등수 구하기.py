# https://www.acmicpc.net/problem/1205
# 등수 구하기, 실버4

import sys
from collections import deque
def answer():
  N, taesu, P =map(int,input().split(" "))
  if N == 0:
    return 1
  scores = list(map(int,input().split(" ")))

  scores.sort(reverse=True) # 내림차순 정렬

  min_score = min(scores)

  if len(scores) < P:
    scores.append(taesu)
    scores.sort(reverse=True)
    score_index = None
    for index,score in enumerate(scores):
      if score == taesu:
        score_index= index
        break
    
    return score_index+1
    
  elif len(scores) == P and min_score < taesu:
    scores = scores[0:-1:1]
    scores.append(taesu)
    scores.sort(reverse=True)
    score_index = None
    for index,score in enumerate(scores):
      if score == taesu:
        score_index= index
        break
    
    return score_index+1
  else:
    return -1

print(answer())
