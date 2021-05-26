// 1078 - Even Between Five Numbers
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1078

const input = require("fs").readFileSync("/dev/stdin", "utf8");

const multiple = parseInt(input);
const table = Array.from({ length: 10 }, (value, index) => 1 + index); // Generate an array with 1 up to 10

for (let value of table) {
  console.log(`${value} x ${multiple} = ${value * multiple}`);
}
