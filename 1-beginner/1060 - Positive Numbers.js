// 1060 - Positive Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1060

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value)).filter(value => value > 0);

console.log(`${values.length} valores positivos`);