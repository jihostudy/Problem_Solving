# https://www.acmicpc.net/problem/9017
# 크로스 컨트리, 실버3

import sys
import copy
from collections import deque, defaultdict
from typing import List

T = int(input())
for _ in range(T):
  N = int(input())
  numbers = list(map(int,input().split(" ")))

  #1. 6명이상이지 않은 팀 구하기
  team_info = {}
  for number in numbers:
    if number not in team_info:
      team_info[number] = defaultdict(int)
    team_info[number]['total_cnt'] += 1

  unfinished_team = set()
  for team in team_info:
    if team_info[team]['total_cnt'] < 6:
      unfinished_team.add(team)   

  # print(f"미통과 팀 : {unfinished_team}")

  #2. 순회
  winner = set()
  point = 1

  for team in numbers:
    # print(f"add team : {team}")
    # 점수를 못 받는 팀
    if team in unfinished_team:
      # print("건너뜀")
      continue

      
    team_info[team]['cnt'] += 1
    
    # 최초 4개의 포인트만 더함
    if team_info[team]['cnt'] <= 4:
      team_info[team]['sum'] += point
    
    # 갱신 조건
    if team_info[team]['cnt'] == 5:
      team_info[team]['fifth'] = point
      
    if team_info[team]['cnt'] == 4:
      # 최초 갱신
      if len(winner) == 0:
        winner.add(team)
        # print(f"최초라 add : {winner}")
      
      # 이미 winner를 넣었던 경우
      else:
        one_winner = list(winner)[0]
        if team_info[one_winner]['sum'] == team_info[team]['sum']:
          winner.add(team)
        elif team_info[one_winner]['sum'] > team_info[team]['sum']:
          winner = set()
          winner.add(team)
        # print(f"이미 있었고 최종 : {winner}")
    point += 1
    # print(f"winner: {winner}\n")

  # def print2d_set(inputs):
  #   for input in inputs:
  #     print(f"{input} : ")
  #     print(inputs[input])
    
  # print2d_set(team_info)
  # print()
  # print(f"승자 : {winner}")

  if len(winner) == 1:
    print(list(winner)[0])
  else:
    selections = []
    for win in list(winner):
      selections.append([win,team_info[win]['fifth']])
    # print(f"selections : {selections}")
    
    selections.sort(key=lambda x:x[1])
    
    print(selections[0][0])
  




    
      

      
      
  

