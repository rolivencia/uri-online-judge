// 1116 - Dividing X by Y
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1116

const input = "4\n" + "2 3\n" + "-3 -5\n" + "-4 3\n" + "2 -4";

// const input = require("fs").readFileSync("/dev/stdin", "utf8");
const values = input
  .split("\n")
  .filter((value) => !!value)
  .slice(1)
  .map((value) => value.split(" "))
  .map((pair) => ({ x: parseInt(pair.shift()), y: parseInt(pair.shift()) }));

// console.log(values);

// Imperative printing
for (const pair of values) {
  pair.y === 0
    ? console.log("divisao impossivel")
    : console.log((pair.x / pair.y).toFixed(1));
}

// Functional printing
values.map((pair) =>
  pair.y === 0
    ? console.log("divisao impossivel")
    : console.log((pair.x / pair.y).toFixed(1))
);


