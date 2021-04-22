// 1009 - Salary with Bonus
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1009

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const name = lines.shift();
const salary = parseFloat(lines.shift());
const bonus = parseFloat(lines.shift());

const payment = salary + 0.15 * bonus;

console.log('TOTAL = R$ ' + (payment).toFixed(2));
