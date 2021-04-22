// 1006 - Average 21
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1006

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(line => parseFloat(line).toFixed(1));

//const lines = [10, 10, 5];

const a = lines[0];
const b = lines[1];
const c = lines[2];

console.log('MEDIA = ' + ((a*2+b*3+c*5)/10).toFixed(1));