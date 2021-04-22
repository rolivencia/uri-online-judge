// 1038 - Snack
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1038

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [idProduct, quantity] = input.split(" ").map(value => parseInt(value));

const table = [
    {id: 1, specification: "Cachorro Quente", price: 4 },
    {id: 2, specification: "X-Salada", price: 4.50 },
    {id: 3, specification: "X-Bacon", price: 5 },
    {id: 4, specification: "Torrada simples", price: 2 },
    {id: 5, specification: "Refrigerante", price: 1.50 }
];

const pickedProduct = table.filter(product => product.id === idProduct).pop();

console.log(`Total: R$ ${(quantity * pickedProduct.price).toFixed(2)}`);