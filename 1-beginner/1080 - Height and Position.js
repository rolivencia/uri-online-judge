// 1080 - Height and Position
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1080

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(value => parseInt(value));

let highest = 0;
let index = 0;

for(let i = 0; i < lines.length; i++){
    if(lines[i] > highest){
        highest = lines[i];
        index = i+1;
    }
}

console.log(highest);
console.log(index);
