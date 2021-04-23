// 1046 - Game Time
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1046

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [start, end] = input.split(' ').map(value => parseInt(value));

let duration;

if(start === end){
    duration = 24;
}
else if(start > end){
    duration = (24 - start) + end;
}
else{
    duration = end - start;
}

console.log(`O JOGO DUROU ${duration} HORA(S)`);