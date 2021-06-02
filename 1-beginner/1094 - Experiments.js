// 1094 - Experiments
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1094

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').slice(1);

let total = 0;
let rabbits = 0;
let rats = 0;
let frogs = 0;

for(let line of lines){

    //Destructuring the string into array, and then into values
    const [amountString, animal] = line.split(' ');
    const amount = parseInt(amountString);

    if(!isNaN(amount)){
        total += amount;
    }

    switch(animal){
        case 'C':
            rabbits += amount;
            break;
        case 'R':
            rats += amount;
            break;
        case 'S':
            frogs += amount;
            break;
    }
}

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${rabbits}`);
console.log(`Total de ratos: ${rats}`);
console.log(`Total de sapos: ${frogs}`);
console.log(`Percentual de coelhos: ${((rabbits/total) * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((rats/total) * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((frogs/total) * 100).toFixed(2)} %`);
