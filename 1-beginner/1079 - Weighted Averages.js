// 1079 - Weighted Averages
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1079

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').slice(1).filter(line => line !== '');
for(let line of lines){
    const [a, b, c] = line.split(" ").map(number => parseFloat(number));
    console.log(((2/10)*a + (3/10)*b + (5/10)*c).toFixed(1));
}