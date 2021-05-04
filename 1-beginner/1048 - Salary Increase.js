// 1048 - Salary Increase
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1048
// Problem has known issues for JavaScript in URI. More information here: https://www.urionlinejudge.com.br/judge/en/questions/view/1048/11243

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const previousSalary = parseFloat(input);

const scales = [
    { min: 0, max: 400.00, rate: 0.15 },
    { min: 400.01, max: 800.00, rate: 0.12 },
    { min: 800.01, max: 1200.00, rate: 0.10 },
    { min: 1200.01, max: 2000.00, rate: 0.07 },
    { min: 2000.01, max: Infinity, rate: 0.04 },
];

const scale = scales.filter(scale => scale.min <= previousSalary && scale.max >= previousSalary).pop();

console.log(`Novo salario: ${ (previousSalary * (1 + scale.rate)).toFixed(2) }`);
console.log(`Reajuste ganho: ${ (previousSalary * scale.rate).toFixed(2) } `);
console.log(`Em percentual: ${ (scale.rate * 100).toFixed(0) } %`);