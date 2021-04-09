//1012 - Area

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const pi = 3.14159;


const values = lines.shift().split(' ');
const a = parseFloat(values[0]);
const b = parseFloat(values[1]);
const c = parseFloat(values[2]);

console.log('TRIANGULO: ' + ((a * c)/2.0).toFixed(3));
console.log('CIRCULO: ' + (pi * Math.pow(c,2)).toFixed(3));
console.log('TRAPEZIO: ' + ((c * ((a + b)/2.0))).toFixed(3));
console.log('QUADRADO: ' + Math.pow(b, 2).toFixed(3));
console.log('RETANGULO: ' + (a * b).toFixed(3));