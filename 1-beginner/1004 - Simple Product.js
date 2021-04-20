// 1004 - Simple Product
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1004

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

console.log('PROD = ' + (a*b));
