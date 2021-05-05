// 1067 - Odd Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1067

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const value = parseInt(input);

for(let i = 1; i <= value; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}
