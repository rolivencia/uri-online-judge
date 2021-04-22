// 1007 - Difference
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1007

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const numbers = input.split('\n').map(line => parseInt(line));

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];
const d = numbers[3];

console.log('DIFERENCA = ' + (a*b - c*d));