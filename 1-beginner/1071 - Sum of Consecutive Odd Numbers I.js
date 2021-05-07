// 1071 - Six Odd Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1071

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const compareNumbers = require("../lib/utils/sort");
const [start, end] = input.split('\n').map(value => parseInt(value)).sort(compareNumbers);

let sum = 0;

for(let i = start+1; i < end; i++){
    if(i % 2 !== 0){
        sum += i;
    }
}

console.log(sum);

