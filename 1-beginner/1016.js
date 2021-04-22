//1016 - Distance
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1016

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const distance = parseInt(input.split('\n').shift()); //in km
const distancePerMinute = 0.5; //in km/min

console.log(distance / distancePerMinute + " minutos")

