//1015 - Distance between two points

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const [x1, y1] = lines[0].split(" ").map(value => parseFloat(value));
const [x2, y2] = lines[1].split(" ").map(value => parseFloat(value));

const distanceFormula = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

console.log((distanceFormula).toFixed(4));