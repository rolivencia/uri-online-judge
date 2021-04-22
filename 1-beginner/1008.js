// 1008 - Salary
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1008

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const number = lines.shift();
const days = parseInt(lines.shift());
const salaryPerHour = parseFloat(lines.shift());

console.log('NUMBER = ' + number);
console.log('SALARY = U$ ' + (days * salaryPerHour).toFixed(2));
