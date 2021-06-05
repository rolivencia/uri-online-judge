// 1097 - Sequence IJ 3
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1097

for (let i = 1; i <= 9; i++) {
    const step = i - 1;
    if (i % 2 !== 0) {
        for (let j = 7 + step; j >= 5 + step; j--) {
            console.log(`I=${i} J=${j}`);
        }
    }
}
