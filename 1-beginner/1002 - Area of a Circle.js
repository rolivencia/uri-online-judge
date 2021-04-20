// 1002 - Area of a Circle
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1002

// TODO: Include libraries for execution and testing in Windows-based libraries (can this be done automatically based on environment checking?)
/**

// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const readlineSync = require('readline-sync');
let input = readlineSync.questionFloat("");
// const lines = input.split('\n');

const pi = 3.14159;
// const radius = parseFloat(input);

// toFixed used to log up to 4 decimal digits
console.log("A=" + (pi * Math.pow(input,2)).toFixed(4));
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const pi = 3.14159;
const radius = parseFloat(lines.shift());
const area = pi * Math.pow(radius,2);

// toFixed used to log up to 4 decimal digits
// toFixed returns a string and has more precedence than the arithmetic operators, so it must be applied
// only at the point of printing the resulting area value
console.log("A=" + area.toFixed(4));
