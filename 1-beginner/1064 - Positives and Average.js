// 1064 - Positives and Average
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1064

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const positiveValues = input.split('\n').map(value => parseFloat(value)).filter(value => value > 0);
const sumOfValues = positiveValues.reduce((previous, current) => previous + current);                  // Add taxes

console.log(`${positiveValues.length} valores positivos`);
console.log((sumOfValues/positiveValues.length).toFixed(1));


