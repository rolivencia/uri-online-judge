// 1065 - Even Between Five Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1065

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const positiveValues = input.split('\n').map(value => parseInt(value)).filter(value => value % 2 === 0);

console.log(`${positiveValues.length} valores pares`);
