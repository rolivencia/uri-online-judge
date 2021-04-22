// 1010 - Simple Calculate
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1010
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

//

const product1Raw = lines.shift().split(' ');
const product2Raw = lines.shift().split(' ');

const product1 = {code: parseInt(product1Raw[0]), units: parseInt(product1Raw[1]), price: parseFloat(product1Raw[2])};
const product2 = {code: parseInt(product2Raw[0]), units: parseInt(product2Raw[1]), price: parseFloat(product2Raw[2])};

const product1Amount = product1.units * product1.price;
const product2Amount = product2.units * product2.price;

console.log('VALOR A PAGAR: R$ ' + (product1Amount + product2Amount).toFixed(2));
