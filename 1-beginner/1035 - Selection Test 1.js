// 1035 - Selection Test 1

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a,b,c,d] = input.split(" ").map(value => parseInt(value));

const isGreaterThan = (value1, value2) => (value1 > value2);
const isPositive = value => value > 0;
const isEven = value => value % 2 === 0;

const conditionsAreMet = isGreaterThan(b,c)
                      && isGreaterThan(d,a)
                      && isGreaterThan(c+d, a+b)
                      && isPositive(c)
                      && isPositive(d)
                      && isEven(a);

return conditionsAreMet ? console.log('Valores aceitos') : console.log('Valores nao aceitos');

