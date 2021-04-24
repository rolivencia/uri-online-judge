// 1046 - Game Time with Minutes
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1047

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
//const input = "1 59 14 11";
const [startHour, startMinute, endHour, endMinute] = input.split(' ').map(value => parseInt(value));

let hourDuration;
let minuteDuration;

// Calculation of hours
if(startHour === endHour){
    hourDuration = 24;
}
else if(startHour > endHour){
    hourDuration = (24 - startHour) + endHour;
}
else{
    hourDuration = endHour - startHour;
}

// Calculation of minutes
if(startMinute === endMinute){
    minuteDuration = 0;
}
else if(startMinute > endMinute){
    hourDuration--;
    minuteDuration = 60 + (endMinute - startMinute);
}
else{
    // Case where the hour is the same and the difference is only in minutes
    if(startHour === endHour){
        hourDuration = 0;
    }
    minuteDuration = endMinute - startMinute;
}

console.log(`O JOGO DUROU ${hourDuration} HORA(S) E ${minuteDuration} MINUTO(S)`);