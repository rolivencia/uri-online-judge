// 1009 - Salary with Bonus

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const name = lines.shift();
const salary = parseFloat(lines.shift());
const bonus = parseFloat(lines.shift());

const payment = salary + 0.15 * bonus;

console.log('TOTAL = R$ ' + (payment).toFixed(2));
