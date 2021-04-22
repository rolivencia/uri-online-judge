// 1011 - Sphere
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1011

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const pi = 3.14159;
const radius = parseFloat(lines.shift());
const volume = (4.0/3) * pi * Math.pow(radius,3);

console.log('VOLUME = ' + volume.toFixed(3));
