// 1044 - Multiples
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1044

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

const [a, b] = input.split(' ').map(value => parseInt(value)).sort(compare);
b%a === 0 ? console.log('Sao Multiplos') : console.log('Nao sao Multiplos');