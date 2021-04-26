// 1050 - Salary Increase
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1050

 const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const ddd = parseInt(input);

const table = [
    { ddd: 61, destination: "Brasilia" },
    { ddd: 71, destination: "Salvador" },
    { ddd: 11, destination: "Sao Paulo" },
    { ddd: 21, destination: "Rio de Janeiro" },
    { ddd: 32, destination: "Juiz de Fora" },
    { ddd: 19, destination: "Campinas" },
    { ddd: 27, destination: "Vitoria" },
    { ddd: 31, destination: "Belo Horizonte" },
];

const register = table.filter(register => register.ddd === ddd);

console.log(register.length ? register.pop().destination : "DDD nao cadastrado");