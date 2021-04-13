// 1020 - Age in Days

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let days = parseInt(input); // in days

const timespansInDays = [
    {time: 365, label: 'ano(s)'}, // 1 year,
    {time: 30, label: 'mes(es)'}, // 1 month,
    {time: 1, label: 'dia(s)'}    // 1 day
];

for(let timespan of timespansInDays){

    const span = Math.floor(days / timespan.time);
    console.log(`${span} ${timespan.label}`)
    days = days%timespan.time;
}