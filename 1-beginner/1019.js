//1019 - Time Conversion

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const timespan = parseInt(input); //in seconds

const hours = Math.floor(timespan/3600);
const minutes = Math.floor((timespan % 3600) / 60);
const seconds = Math.floor((timespan % 3600 % 60));

console.log(`${hours}:${minutes}:${seconds}`);