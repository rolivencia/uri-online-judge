// 1117 - Score Validation
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1117

// const input = "-3.5\n" + "3.5\n" + "11.0\n" + "10.0";
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const values = input.split("\n").map((value) => parseFloat(value));

let validValues = [];

for (const value of values) {
  if (validValues.length === 2) {
    break;
  }
  if (value < 0 || value > 10) {
    console.log("nota invalida");
  } else {
    validValues = validValues.concat(value);
  }
}

console.log(
  `media = ${
    validValues.reduce((value, accumulator) => value + accumulator) /
    validValues.length
  }`
);

// console.log(values);
