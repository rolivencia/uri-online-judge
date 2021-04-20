// 1001 - Extrememely Basic
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1001

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

console.log('X = ' + (a+b));
