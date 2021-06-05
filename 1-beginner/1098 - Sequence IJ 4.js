// 1098 - Sequence IJ 4
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1098

const printedFormat = (number) => parseFloat(number.toFixed(1));

for (let i = 0; i <= 2; i += 0.2) {
  const step = i;
  for (let j = 1 + step; j <= 3 + step; j++) {
    console.log(`I=${printedFormat(i)} J=${printedFormat(j)}`);
  }
}

