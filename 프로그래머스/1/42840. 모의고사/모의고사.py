def solution(answers):
    m1 = [1, 2, 3, 4, 5]
    m2 = [2, 1, 2, 3, 2, 4, 2, 5]
    m3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    cnt = [
        {
            "num": 1,
            "cnt": 0
        },
        {
            "num": 2,
            "cnt": 0
        },
        {
            "num": 3,
            "cnt": 0
        }
    ]
    for idx, answer in enumerate(answers):
        if (answer == m1[idx % len(m1)]):
            cnt[0]["cnt"] += 1
        if (answer == m2[idx % len(m2)]):
            cnt[1]["cnt"] += 1
        if (answer == m3[idx % len(m3)]):
            cnt[2]["cnt"] += 1
    cnt.sort(key= lambda x:-x["cnt"])

    max = cnt[0]["cnt"]
    answer = []
    for count in cnt:
        if(count["cnt"] == max):
            answer.append(count["num"])
    answer.sort()
    return answer