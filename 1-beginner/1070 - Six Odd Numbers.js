// 1070 - Six Odd Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1070

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let value = parseInt(input);
let i = 0;

do{
    if(value % 2 !== 0){
        console.log(value)
        i++;

    }
    value++;
}
while (i < 6);