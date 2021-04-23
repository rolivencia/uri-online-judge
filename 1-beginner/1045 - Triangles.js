// 1045 - Triangles
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1045

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const compare = (a, b) =>  {
    if (a<b) {
        return 1;
    }
    if (a>b) {
        return -1;
    }
    return 0;
}

const [a, b, c] = input.split(' ').map(value => parseFloat(value)).sort(compare);

if(a >= b + c){
    console.log('NAO FORMA TRIANGULO');
}
else {

    if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
        console.log('TRIANGULO RETANGULO');
    }
    else if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
        console.log('TRIANGULO OBTUSANGULO');
    }
    else {
        console.log('TRIANGULO ACUTANGULO');
    }

    if (a === b && b === c) {
        console.log('TRIANGULO EQUILATERO');
    }
    if(a === b && b !== c || a !== b && b === c){
        console.log('TRIANGULO ISOSCELES');
    }
}

