//1021 - Banknotes and Coins
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1021

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
let amount = parseFloat(input); //in $

const bankNotes = [100, 50, 20, 10, 5, 2];
const coinValues = [1, 0.5, 0.25, 0.10, 0.05, 0.01];

const roundTo2Digits = (number) => Math.round((number + Number.EPSILON) * 100) / 100;

console.log('NOTAS:');
for(let bankNote of bankNotes){
    const bills = Math.floor(amount / bankNote);
    console.log(`${bills} nota(s) de R$ ${bankNote}.00`);
    amount = amount%bankNote;
}

// Round to prevent inaccurate results
amount = roundTo2Digits(amount);

console.log('MOEDAS:');
for(let coinValue of coinValues) {
    const coins = Math.floor(amount / coinValue);
    console.log(`${coins} moeda(s) de R$ ${coinValue.toFixed(2)}`);
    amount = roundTo2Digits(amount % coinValue);
}

