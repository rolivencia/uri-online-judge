//1018 - Banknotes

const input = require('fs').readFileSync('/dev/stdin', 'utf8');

let amount = parseInt(input); //in $

const bankNotes = [100, 50, 20, 10, 5, 2, 1];

console.log(amount);

for(let bankNote of bankNotes){
    const bills = Math.floor(amount / bankNote);
    console.log(`${bills} nota(s) de R$ ${bankNote},00`);
    amount = amount%bankNote;
}