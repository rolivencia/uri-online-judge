//1113 - Ascending and Descending
// URL - https://www.urionlinejudge.com.br/judge/en/problems/view/1113

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

for (let line of lines) {
  const [start, end] = line.split(" ").map((value) => parseInt(value));

  if (start === end) {
    break;
  } else {
    start > end ? console.log("Crescente") : console.log("Decrescente");
  }
}
