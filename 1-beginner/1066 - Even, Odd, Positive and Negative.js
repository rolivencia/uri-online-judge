// 1066 - Even, Odd, Positive and Negative
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1066
// Problem has known issues for JavaScript in URI. More information here: https://www.urionlinejudge.com.br/judge/en/questions/view/1066/11175

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.split('\n').map(value => parseInt(value));

const evenValues = values.filter(value => value % 2 === 0);
const oddValues = values.filter(value => value % 2 !== 0);
const positiveValues = values.filter(value => value > 0);
const negativeValues = values.filter(value => value < 0);


console.log(`${evenValues.length} valor(es) par(es)`);
console.log(`${oddValues.length} valor(es) impar(es)`);
console.log(`${positiveValues.length} valor(es) positivo(s)`);
console.log(`${negativeValues.length} valor(es) negativo(s)`);


