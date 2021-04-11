//1016 - Distance

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const distance = parseInt(input.split('\n').shift()); //in km
const distancePerMinute = 0.5; //in km/min

console.log(distance / distancePerMinute + " minutos")

