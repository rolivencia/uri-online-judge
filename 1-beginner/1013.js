//1013 - The Greatest
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1013

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const values = lines.shift().split(' ').map(value => parseInt(value));
const greater = (a,b) => (a+b+Math.abs(a-b))/2;

const result = greater(greater(values[0], values[1]), values[2]);

console.log(result + " eh o maior");