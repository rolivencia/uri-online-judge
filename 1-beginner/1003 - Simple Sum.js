// 1003 - Simple Sum
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1003

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

console.log('SOMA = ' + (a+b));
