//1017 - Fuel Spent
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1017

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(value => parseInt(value));

const performance = 12.0; // in Km/L
const tripDuration = lines[0]; // in hours
const averageSpeed = lines[1]; // in Km/h

const distance = tripDuration * averageSpeed; // in Km - hours gets cancelled out
const fuelRequired = distance / performance; // in L - Km gets cancelled out

console.log(fuelRequired.toFixed(3));

