//1014 - The Greatest

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(value => parseFloat(value));

const distance = lines[0];
const spentFuel = lines[1];

console.log((distance/spentFuel).toFixed(3) + " km/l");