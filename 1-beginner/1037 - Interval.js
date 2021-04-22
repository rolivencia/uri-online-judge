// 1037 - Interval
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1037

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const value = parseFloat(input);

if(value < 0 || value > 100){
    console.log('Fora de intervalo');
}
else{
    switch(true){
        case (value <= 25):
            console.log('Intervalo [0,25]');
            break;
        case (value <= 50):
            console.log('Intervalo (25,50]');
            break;
        case (value <= 75):
            console.log('Intervalo (50,75]');
            break;
        case (value <= 100):
            console.log('Intervalo (75,100]');
            break;
    }
}