// 1073 - Even Square
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1073

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const value = parseInt(input);

for (let i = 1; i <= value; i++) {
  if (i % 2 === 0) {
    console.log(`${i}^${i} = ${(i * i).toFixed(0)}`);
  }
}
