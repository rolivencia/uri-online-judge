// 1096 - Sequence IJ 2
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1096

for (let i = 1; i <= 9; i++) {
  if (i % 2 !== 0) {
    for (let j = 7; j >= 5; j--) {
      console.log(`I=${i} J=${j}`);
    }
  }
}
