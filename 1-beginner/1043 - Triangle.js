// 1043 - Triangle
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1043

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const compare = (a, b) =>  {
    if (a<b) {
        return -1;
    }
    if (a>b) {
        return 1;
    }
    return 0;
}

const [a, b, c] = input.split(" ").map(value => parseFloat(value));
const [sortedA, sortedB, sortedC] = input.split(" ").map(value => parseFloat(value)).sort(compare);

if(sortedC < sortedA + sortedB){
    console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
}
else{
    console.log(`Area = ${(((a + b)/2) * c).toFixed(1)}`);
}
