function solution(bandage, health, attacks) {
  let hp = health;
  let consec = 0;
  const max_time = attacks[attacks.length - 1][0];
  let next_attack_idx = 0;
  // 로직
  let i = 1;
  while (i <= max_time && next_attack_idx < attacks.length) {
    const attack_time = attacks[next_attack_idx][0];
    // 공격 받음
    if (i == attack_time) {
      console.log(i, "시점 : 공격 O");
      hp -= attacks[next_attack_idx][1];
      consec = 0;
      if (hp <= 0) return -1;
      next_attack_idx += 1;
    }
    // 공격 받지 않음
    else {
      console.log(i, "시점 : 공격 X");
      // 체력 회복
      hp += bandage[1];
      // 연속 증가
      consec += 1;
      // 추가 회복
      if (consec === bandage[0]) {
        hp += bandage[2];
        consec = 0;
      }
      if (hp > health) hp = health; // 최대 제한
    }
    i++;
    console.log("현재체력:", hp);
  }
  return hp;
}