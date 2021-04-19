// 1042 - Simple Sort

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.split(" ").map(value => parseInt(value));

const compare = (a, b) =>  {
    if (a<b) {
        return -1;
    }
    if (a>b) {
        return 1;
    }
    return 0;
}

const sorted = values.slice().sort(compare);
sorted.forEach(value => console.log(value));

console.log();

values.forEach(value => console.log(value));

