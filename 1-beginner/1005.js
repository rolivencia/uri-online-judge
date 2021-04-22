// 1005 - Average 1
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1005

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const gradeA = parseFloat(lines.shift()) * 3.5; // Multiply by weight
const gradeB = parseFloat(lines.shift()) * 7.5; // Multiply by weight
const media = ((gradeA+gradeB)/11); // 11 = 3.5 + 7.5

console.log(`MEDIA = ${media.toFixed(5)}`);
