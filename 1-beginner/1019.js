// 1019 - Time Conversion
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1019

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const timespan = parseInt(input); //in seconds

const hours = Math.floor(timespan/3600);
const minutes = Math.floor((timespan % 3600) / 60);
const seconds = Math.floor((timespan % 3600 % 60));

console.log(`${hours}:${minutes}:${seconds}`);